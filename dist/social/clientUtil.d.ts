import RedditClient from './redditClient';
import DiscordClient from './discordClient';
import TwitterClient from './twitterClient';
import TumblrClient from './tumblrClient';
export declare type SocialClients = {
    redditClient: RedditClient;
    discordClient: DiscordClient;
    twitterClient: TwitterClient;
    tumblrClient: TumblrClient;
};
export declare const neverFapDeluxeSocialClient: () => Promise<{
    redditClient: RedditClient;
    discordClient: DiscordClient;
    twitterClient: TwitterClient;
    tumblrClient: TumblrClient;
}>;
export declare const theNeverFapDeluxePodcastClient: () => Promise<{
    redditClient: RedditClient;
    discordClient: DiscordClient;
    twitterClient: TwitterClient;
    tumblrClient: TumblrClient;
}>;
export declare const theWritersDailyPodcastClient: () => Promise<{
    redditClient: RedditClient;
    discordClient: DiscordClient;
    twitterClient: TwitterClient;
    tumblrClient: TumblrClient;
}>;
