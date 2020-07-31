import { Submission, Comment } from 'snoowrap';

import { AggregatedDBFeedItem, SocialFeedData } from '../types/feedTypes';

import knexFeed from '../util/dbConnectors/knexFeed';
import { EpisodeData } from '../types/episodeTypes';
import RedditClient from '../social/redditClient';

const addNewAggregatedSubredditSubmissionItemsToDB = async (itemsArray: Submission[]): Promise<AggregatedDBFeedItem[]> => {
  for (const item of itemsArray) {
    // const nowDate = new Date();
    // const toPublishDate = new Date(item.publishDate);
    // if (nowDate > toPublishDate) {
    //   // Maybe insert them into the DB?
    //   await knexFeed('aggregated_social_feed').insert({

    //   });
    //   newItems.push(item);
    // }
  }

  // return newItems;
  return [];
}

// https://github.com/not-an-aardvark/snoowrap/blob/master/src/objects/Submission.d.ts
export const aggregatedSubredditFeedCheck = async (feedId: string, subreddit: string): Promise<AggregatedDBFeedItem[]> => {
  const redditClient = new RedditClient({ subreddit });

  const newRedditSubmissions: Submission[] = await redditClient.getLatestSubredditPosts();

  const today = new Date();
  const anHourAgo = new Date(today.setHours(today.getHours() - 1));

  // // get all items in db
  // const dbFeedItems: AggregatedDBFeedItem[] = await knexFeed('curated_social_feed_items').where({ parent_feed_id: feedId }).select('*');

  // const nonPostedItemsArray: Submission[] =
  // newRedditSubmissions.filter((item: AggregatedDBFeedItem): boolean => !dbFeedItems.find(dbFeedItem => dbFeedItem.id === item.id));

  // const newItems = await addNewAggregatedSubredditSubmissionItemsToDB(nonPostedItemsArray);

  // return newItems;
  return [] as AggregatedDBFeedItem[];
};

export default aggregatedFeedCheck;