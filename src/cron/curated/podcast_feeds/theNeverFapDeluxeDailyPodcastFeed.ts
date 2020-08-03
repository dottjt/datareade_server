import {
  THE_NEVERFAP_DELUXE_DAILY_PODCAST_FEED_ID
} from '../../../const';

import { PodcastFeedType } from '../feedUtil';
import { data, EpisodeData, SocialFeedData } from '@dottjt/datareade';
import logger from '../../../util/logger';

import curatedFeedCheck10Minutes from '../../curatedFeedCheck10Minutes';

import { theNeverFapDeluxePodcastClient } from '../../../social/clientUtil';

import { theNeverFapDeluxeDailyNewEpisodeRedditText } from '../../messages/redditMessages';
import { theNeverFapDeluxeDailyNewEpisodeDiscordEmbed } from '../../messages/discordMessages';
import { theNeverFapDeluxeDailyNewEpisodeTwitterText } from '../../messages/twitterMessages';
import { theNeverFapDeluxeDailyNewEpisodeTumblrText } from '../../messages/tumblrMessages';

const theNeverFapDeluxeDailyPodcastFeed = async () => {
  try {
    const { episodesTNDD } = data;

    const itemsToPost: (SocialFeedData|EpisodeData)[] = await curatedFeedCheck10Minutes({
      feedId: THE_NEVERFAP_DELUXE_DAILY_PODCAST_FEED_ID,
      items: episodesTNDD,
    });
    
    logger.info(`Latest NFDD episode: ${episodesTNDD[episodesTNDD.length - 1].title}`);
    logger.info('itemsToPost.length', itemsToPost.length);

    if (itemsToPost.length > 0) {
      // const type = PodcastFeedType.TheNeverFapDeluxeDaily;

      const socialClients = await theNeverFapDeluxePodcastClient();

      logger.info('There are TNDD Podcast items to post!');
      logger.info({item: itemsToPost[0].toString()});
      for (const item of itemsToPost) {
        const episodeItem = item as EpisodeData;

        // REDDIT
        const submissionName = await socialClients.redditClient.sendLinkPost({
          title: `The NeverFap Deluxe Daily Podcast ${item.title}`,
          url: episodeItem.castboxLink
        })

        await socialClients.redditClient.
          setFlair({ submissionName, flair_template_id: '4c664b26-c4e9-11ea-ab1b-0e67ce4ce8bb' }) // NFD podcast flair ID

        await socialClients.redditClient
          .sendReply({
            submissionName,
            text: theNeverFapDeluxeDailyNewEpisodeRedditText(episodeItem)
          })

        // DISCORD
        await socialClients.discordClient.sendChannelTextMessage({
          channelId: process.env.RECOVERYCHAT_NEVERFAPDELUXEPODCAST as string,
          text: `${item.title}\n\nPodcast Link: ${episodeItem.castboxLink}`
        });

        await socialClients.discordClient.sendChannelMessageEmbed({
          channelId: process.env.RECOVERYCHAT_NEVERFAPDELUXEPODCAST as string,
          messageEmbed: theNeverFapDeluxeDailyNewEpisodeDiscordEmbed(episodeItem)
        });

        // TWITTER
        await socialClients.twitterClient.sendTextPost({
          text: theNeverFapDeluxeDailyNewEpisodeTwitterText(episodeItem)
        });

        // TUMBLR
        await socialClients.tumblrClient.sendTextPost({
          title: `The NeverFap Deluxe Daily ${item.title}`,
          body: theNeverFapDeluxeDailyNewEpisodeTumblrText(episodeItem),
        });
      }

      socialClients.discordClient.destroy();
    }
  } catch(error) {
    throw new Error(`${error} - theNeverFapDeluxeDailyPodcastFeed`);
  }
};

export default theNeverFapDeluxeDailyPodcastFeed;
