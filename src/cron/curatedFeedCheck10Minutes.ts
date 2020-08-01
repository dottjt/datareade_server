import { EpisodeData, CuratedFeedDBItem, SocialFeedData } from '@dottjt/datareade';

import knexFeed from '../util/dbConnectors/knexFeed';

const addNewItemsToDB = async (itemsArray: (SocialFeedData|EpisodeData)[], feedId: string): Promise<void> => {
  for (const item of itemsArray) {
    await knexFeed('curated_social_feed_items').insert({
      id: item.id,
      title: item.title,
      publishDate: item.socialPublishDate,
      curated_type: item.curated_type,
      socials: item.socials,
      parent_feed_id: feedId,
    });
  }
}

type curatedFeedCheck10MinutesProps = {
  feedId: string,
  items: SocialFeedData[] | EpisodeData[]
}

const curatedFeedCheck10Minutes = async (
  { feedId, items }: curatedFeedCheck10MinutesProps
): Promise<SocialFeedData[] | EpisodeData[]> => {
  // We add an extra minute, just to be sure we didn't miss anything, and it
  // is filtered out anyway if it is already in the database.
  const anHourAgo = process.env.NODE_ENV !== 'production' ? (
    new Date(new Date().getTime() - 1420*60000)
  ) : (
    // new Date(new Date().getTime() - 11*60000)
    new Date(new Date().getTime() - 31*60000)
  )
  const dateNow = new Date();
  // the publish time dates are in Melbourne Time, but these dates are in UTC// But that's fine.
  // It's all relative and retrieves the correct dates. It just means that the times in the database will be UTC, but that's also not a huge deal
  // Because it's simply a format issue. I can convert it back
  // new Date() converts time to UTC.

  const relevantItemsToPublish = (items as Array<SocialFeedData|EpisodeData>).filter(item => {
    const publishDate = new Date(item.socialPublishDate);
    // console.log('publishDate', publishDate);
    // console.log('dateNow', dateNow);
    // console.log('date10MinutesAgo', date10MinutesAgo);
    return publishDate >= anHourAgo && publishDate <= dateNow;
  });

  if (relevantItemsToPublish) {
    // NOTE: An additional check to ensure that it hasn't already been posted.
    const dbFeedItems: CuratedFeedDBItem[] = await knexFeed('curated_social_feed_items').where({ parent_feed_id: feedId }).select('id');

    const nonPostedItemsArray: (SocialFeedData|EpisodeData)[] =
      (relevantItemsToPublish as Array<SocialFeedData|EpisodeData>).filter(
        (item: SocialFeedData|EpisodeData): boolean =>
          !dbFeedItems.find(
            (dbFeedItem: CuratedFeedDBItem) => dbFeedItem.id === item.id
          )
      );

    await addNewItemsToDB(nonPostedItemsArray, feedId);

    return nonPostedItemsArray as (SocialFeedData[] | EpisodeData[]);
  }

  return [];
};

export default curatedFeedCheck10Minutes;