import { PodcastFeedType } from '../../feedUtil';
import { EpisodeData } from '../../../../types/episodeTypes';
import RedditClient from '../../../../social/redditClient';
declare const postPodcastEpisodeToReddit: (redditClient: RedditClient, item: EpisodeData, type: PodcastFeedType) => Promise<void>;
export default postPodcastEpisodeToReddit;
