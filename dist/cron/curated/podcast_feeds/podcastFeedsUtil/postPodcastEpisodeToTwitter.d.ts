import { EpisodeData } from "../../../../types/episodeTypes";
import { PodcastFeedType } from "../../feedUtil";
import TwitterClient from "../../../../social/twitterClient";
declare const postEpisodeToTwitter: (twitterClient: TwitterClient, item: EpisodeData, type: PodcastFeedType) => Promise<void>;
export default postEpisodeToTwitter;
