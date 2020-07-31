import { CuratedFeedDBItem, SocialFeedData } from '../types/feedTypes';

import knexFeed from '../util/dbConnectors/knexFeed';
import { EpisodeData } from '../types/episodeTypes';

// NOTE In this version, it does something different. But I don't think it works.

const addNewItemsToDB = async (itemsArray: (SocialFeedData|EpisodeData)[]): Promise<void> => {
  const newItems: (SocialFeedData|EpisodeData)[] = [];

  for (const item of itemsArray) {
    const nowDate = new Date();
    const toPublishDate = new Date(item.publishDate);
    if (nowDate > toPublishDate) {
      // Maybe insert them into the DB?
      await knexFeed('curated_social_feed_items').insert({

      });
      newItems.push(item);
    }
  }
}

type curatedFeedCheck10MinutesProps = {
  feedId: string,
  items: SocialFeedData[] | EpisodeData[]
}

const curatedFeedCheck10Minutes = async (
  { feedId, items }: curatedFeedCheck10MinutesProps
): Promise<SocialFeedData[] | EpisodeData[]> => {

  const dbFeedItems: CuratedFeedDBItem[] = await knexFeed('curated_social_feed_items').where({ parent_feed_id: feedId }).select('*');

  const nonPostedItemsArray: (SocialFeedData|EpisodeData)[] =
    (items as Array<SocialFeedData|EpisodeData>).filter(
      (item: SocialFeedData|EpisodeData): boolean =>
        !dbFeedItems.find(
          (dbFeedItem: CuratedFeedDBItem) => dbFeedItem.id === item.id
        )
    );

  await addNewItemsToDB(nonPostedItemsArray);

  return (nonPostedItemsArray as EpisodeData[]);
};

export default curatedFeedCheck10Minutes;