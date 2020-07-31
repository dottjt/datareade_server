import {
  THE_WRITERS_DAILY_PODCAST_FEED_ID
} from '../../../const';

import { EpisodeData } from '../../../types/episodeTypes';
import { SocialFeedData } from '../../../types/feedTypes';
import { episodeTWDList } from '../../../data/twd_episodes/index-twd';
import logger from '../../../util/logger';

import curatedFeedCheck10Minutes from '../../curatedFeedCheck10Minutes';

import { PodcastFeedType } from '../feedUtil';

import postPodcastEpisodeToReddit from './podcastFeedsUtil/postPodcastEpisodeToReddit';
import postPodcastEpisodeToDiscord from './podcastFeedsUtil/postPodcastEpisodeToDiscord';
import postPodcastEpisodeToTumblr from './podcastFeedsUtil/postPodcastEpisodeToTumblr';
import postPodcastEpisodeToTwitter from './podcastFeedsUtil/postPodcastEpisodeToTwitter';
import { theWritersDailyPodcastClient } from '../../../social/clientUtil';

const theWritersDailyPodcastFeed = async () => {
  const itemsToPost: (SocialFeedData|EpisodeData)[] = await curatedFeedCheck10Minutes({
    feedId: THE_WRITERS_DAILY_PODCAST_FEED_ID,
    items: episodeTWDList
  });

  if (itemsToPost.length > 0) {
    const type = PodcastFeedType.TheWritersDaily;

    const socialClients = await theWritersDailyPodcastClient();

    for (const item of itemsToPost) {
      logger.info('There are TWD Podcast items to post!');
      console.log(item);
      await postPodcastEpisodeToReddit(socialClients.redditClient, (item as EpisodeData), type);
      await postPodcastEpisodeToDiscord(socialClients.discordClient, (item as EpisodeData), type);
      await postPodcastEpisodeToTwitter(socialClients.twitterClient, (item as EpisodeData), type);
      await postPodcastEpisodeToTumblr(socialClients.tumblrClient, (item as EpisodeData), type);
    }

    socialClients.discordClient.destroy();
  }
};

export default theWritersDailyPodcastFeed;
