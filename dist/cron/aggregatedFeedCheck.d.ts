import { AggregatedDBFeedItem } from '../types/feedTypes';
export declare const aggregatedSubredditFeedCheck: (feedId: string, subreddit: string) => Promise<AggregatedDBFeedItem[]>;
export default aggregatedFeedCheck;
