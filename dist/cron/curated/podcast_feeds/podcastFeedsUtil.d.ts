import RedditClient from '../../../social/redditClient';
import DiscordClient from '../../../social/discordClient';
import TwitterClient from '../../../social/twitterClient';
import { EpisodeData } from '../../../types/episodeTypes';
export declare enum PodcastFeedType {
    TheNeverFapDeluxeDaily = "TheNeverFapDeluxeDaily",
    TheWritersDaily = "TheWritersDaily"
}
export declare const postEpisodeToTwitter: (twitterClient: TwitterClient, item: EpisodeData, type: PodcastFeedType) => Promise<void>;
export declare const postEpisodeToDiscord: (discordClient: DiscordClient, item: EpisodeData, type: PodcastFeedType) => Promise<void>;
export declare const postEpisodeToReddit: (redditClient: RedditClient, item: EpisodeData, type: PodcastFeedType) => Promise<void>;
