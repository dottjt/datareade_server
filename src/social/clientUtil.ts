import { NEVERFAP_DELUXE_SUBREDDIT, THE_WRITERS_DAILY_SUBREDDIT } from '../const';

import RedditClient from './redditClient';
import DiscordClient from './discordClient';
import TwitterClient from './twitterClient';
import TumblrClient from './tumblrClient';

export type SocialClients = {
  redditClient: RedditClient;
  discordClient: DiscordClient;
  twitterClient: TwitterClient;
  tumblrClient: TumblrClient;
}

export const neverFapDeluxeSocialClient = async () => {
  try {
    const redditClient = new RedditClient({ subreddit: NEVERFAP_DELUXE_SUBREDDIT });
    const discordClient = new DiscordClient({ botToken: process.env.DISCORD_NFD_BOT_TOKEN });
    await discordClient.init();
    const twitterClient = new TwitterClient({
      access_token_key: process.env.TWITTER_API_NFD_ACCESS_TOKEN as string,
      access_token_secret: process.env.TWITTER_API_NFD_ACCESS_TOKEN_SECRET as string,
    });
    const tumblrClient = new TumblrClient({
      blogName: 'neverfapdeluxe',
      token: process.env.TUMBLR_API_TNDD_TOKEN,
      token_secret: process.env.TUMBLR_API_TNDD_TOKEN_SECRET
    });

    return {
      redditClient,
      discordClient,
      twitterClient,
      tumblrClient,
    }
  } catch(error) {
    throw new Error(`${error} - neverFapDeluxeSocialClient`);
  }
}

export const theNeverFapDeluxePodcastClient = async () => {
  try {
    const redditClient = new RedditClient({ subreddit: NEVERFAP_DELUXE_SUBREDDIT });
    const discordClient = new DiscordClient({ botToken: process.env.DISCORD_NFD_BOT_TOKEN as string});
    await discordClient.init();
    const twitterClient = new TwitterClient({
      access_token_key: process.env.TWITTER_API_NFD_ACCESS_TOKEN as string,
      access_token_secret: process.env.TWITTER_API_NFD_ACCESS_TOKEN_SECRET as string,
    });
    const tumblrClient = new TumblrClient({
      blogName: 'neverfapdeluxe',
      token: process.env.TUMBLR_API_TNDD_TOKEN,
      token_secret: process.env.TUMBLR_API_TNDD_TOKEN_SECRET
    });

    return {
      redditClient,
      discordClient,
      twitterClient,
      tumblrClient,
    }
  } catch(error) {
    throw new Error(`theNeverFapDeluxePodcastClient - ${error}`);
  }
}

export const theWritersDailyPodcastClient = async () => {
  try {
    const redditClient = new RedditClient({ subreddit: THE_WRITERS_DAILY_SUBREDDIT });
    const discordClient = new DiscordClient({ botToken: process.env.DISCORD_TWD_BOT_TOKEN as string });
    await discordClient.init();
    const twitterClient = new TwitterClient({
      access_token_key: process.env.TWITTER_API_TWD_ACCESS_TOKEN as string,
      access_token_secret: process.env.TWITTER_API_TWD_ACCESS_TOKEN_SECRET as string,
    });
    const tumblrClient = new TumblrClient({
      blogName: 'thewritersdaily',
      token: process.env.TUMBLR_API_TWD_TOKEN,
      token_secret: process.env.TUMBLR_API_TWD_TOKEN_SECRET
    });

    return {
      redditClient,
      discordClient,
      twitterClient,
      tumblrClient,
    }
  } catch(error) {
    throw new Error(`${error} - theWritersDailyPodcastClient`);
  }
}
