import cron from 'node-cron';
import { data } from '@dottjt/datareade';

import theWritersDailyPodcastFeed from './cron/curated/podcast_feeds/theWritersDailyPodcastFeed';
import theNeverFapDeluxeDailyPodcastFeed from './cron/curated/podcast_feeds/theNeverFapDeluxeDailyPodcastFeed';
// import neverFapDeluxeSocialFeed from './cron/curated/social_feeds/theNeverFapDeluxeDailyPodcastFeed';


// import { postAccountabilityTallyToTwitter } from './cron/aggregated/neverFapDeluxe/postXXXToTwitterNFD';
// import { postLatestSubredditPostsToDiscord } from './cron/aggregated/neverFapDeluxe/postXXXToDiscordNFD';
// import { postAccountabilityTallyToReddit } from './cron/aggregated/neverFapDeluxe/postXXXToRedditNFD';

import { buildTNDDWebsite, buildTWDWebsite } from './cron/netlifyBuilds';
import logger from './util/logger';
import { toMelbourneDateString } from './util/serverDates';

const cronOptions = {
  scheduled: true,
  timezone: "Australia/Melbourne"
};

const setupCron = async () => {
  cron.schedule('0 * * * *', async () => { // Every 1 Minute
    logger.info(`${data.episodesTNDD[data.episodesTNDD.length - 1].title} - ${data.episodesTNDD[data.episodesTNDD.length - 1].date.split('T')[0]}`);
    logger.info(`${data.episodesTWD[data.episodesTWD.length - 1].title} - ${data.episodesTWD[data.episodesTWD.length - 1].date.split('T')[0]}`);
  }, cronOptions);

  cron.schedule('*/10 * * * *', async () => { // Every 10 Minutes
    try {
      const date = toMelbourneDateString(new Date());
      logger.info(`${date} - 10 minute cron run.`);

      // Post Podcast Content to Social Media
      await theNeverFapDeluxeDailyPodcastFeed();
      await theWritersDailyPodcastFeed();
    } catch(error) {
      throw new Error(`${error} - wham`);
    }
  }, cronOptions);

   cron.schedule('0 7 * * *', async () => { // 7am Everyday

    const date = toMelbourneDateString(new Date());
    logger.info(`${date} - 7:00 time cron run.`);

    // Netlify Builds
    await buildTNDDWebsite();
    await buildTWDWebsite();

  }, cronOptions);
}

export default setupCron;
