import { SocialFeedData } from '../types/feedTypes';

type curatedFeedCheck10MinutesProps = {
  feedId: string,
  items: SocialFeedData[]
}

const curatedFeedCheck10MinutesRepeat = async (
  { items }: curatedFeedCheck10MinutesProps
): Promise<SocialFeedData[]> => {
  const anHourAgo = process.env.NODE_ENV !== 'production' ? (
    new Date(new Date().getTime() - 1420*60000)
  ) : (
    new Date(new Date().getTime() - 21*60000)
  )
  const dateNow = new Date();

  const relevantItemsToPublish = (items as Array<SocialFeedData>).filter(item => {
    const publishDate = new Date(item.socialPublishDate);
    return publishDate >= anHourAgo && publishDate <= dateNow;
  });

  return relevantItemsToPublish;
};

export default curatedFeedCheck10Minutes;