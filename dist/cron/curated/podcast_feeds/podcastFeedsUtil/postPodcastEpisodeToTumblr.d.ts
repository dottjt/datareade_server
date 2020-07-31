import { EpisodeData } from "../../../../types/episodeTypes";
import { PodcastFeedType } from "../../feedUtil";
import TumblrClient from "../../../../social/tumblrClient";
declare const postPodcastEpisodeToTumblr: (tumblrClient: TumblrClient, item: EpisodeData, type: PodcastFeedType) => Promise<void>;
export default postPodcastEpisodeToTumblr;
