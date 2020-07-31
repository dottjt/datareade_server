import cron from 'node-cron';

import theWritersDailyPodcastFeed from './cron/curated/podcast_feeds/theWritersDailyPodcastFeed';
import theNeverFapDeluxeDailyPodcastFeed from './cron/curated/podcast_feeds/theNeverFapDeluxeDailyPodcastFeed';
// import neverFapDeluxeSocialFeed from './cron/curated/social_feeds/theNeverFapDeluxeDailyPodcastFeed';

// import { postAccountabilityTallyToTwitter } from './cron/aggregated/neverFapDeluxe/postXXXToTwitterNFD';
// import { postLatestSubredditPostsToDiscord } from './cron/aggregated/neverFapDeluxe/postXXXToDiscordNFD';
// import { postAccountabilityTallyToReddit } from './cron/aggregated/neverFapDeluxe/postXXXToRedditNFD';

import { buildTNDDWebsite, buildTWDWebsite } from './cron/netlifyBuilds';
import logger from './util/logger';
import { toMelbourneDateString } from './util/serverDates';

const setupCron = async () => {
  // cron.schedule('*/1 * * * *', async () => { // Every 1 Minute
  //   const date = toMelbourneDateString(new Date());
  //   logger.info(`${date} - 1 minute cron run.`);
  // }, cronOptions());

  // cron.schedule('*/2 * * * *', async () => { // Every 1 Minute
  //   const date = toMelbourneDateString(new Date());
  //   logger.info(`${date} - 2 minute cron run.`);
  // }, cronOptions());

  // cron.schedule('30 8 * * *', async () => { // 7am Everyday
  //   const date = toMelbourneDateString(new Date());
  //   logger.info(`${date} - 8:30 time cron run.`);
  // }, cronOptions())

  // cron.schedule('15 10 * * *', async () => { // 7am Everyday
  //   const date = toMelbourneDateString(new Date());
  //   logger.info(`${date} - 10:15 time cron run. - build netlify`);
  //   await buildTNDDWebsite();
  //   await buildTWDWebsite();

  // }, cronOptions())

  cron.schedule('*/10 * * * *', async () => { // Every 10 Minutes
    try {
      const date = toMelbourneDateString(new Date());
      logger.info(`${date} - 10 minute cron run.`);

      // Check Social Feeds For Content.
      // TODO - actually create strategy
      // await neverFapDeluxeSocialFeed();

      // Post Podcast Content to Social Media
      await theNeverFapDeluxeDailyPodcastFeed();
      await theWritersDailyPodcastFeed();
    } catch(error) {
      throw new Error(`${error} - wham`);
    }
  }, {
    scheduled: true,
    timezone: "Australia/Melbourne"
  });

   cron.schedule('0 7 * * *', async () => { // 7am Everyday

    const date = toMelbourneDateString(new Date());
    logger.info(`${date} - 7:00 time cron run.`);

    // Netlify Builds
    await buildTNDDWebsite();
    await buildTWDWebsite();

  }, {
    scheduled: true,
    timezone: "Australia/Melbourne"
  });

  // cron.schedule('30 7 * * *', async () => { // 7:30am Everyday


  // }, cronOptions());


  // cron.schedule('0 22 * * *', async () => { // 10:00pm Everyday

  //   // Cross Posting
  //   await postAccountabilityTallyToTwitter();
  // }, cronOptions());


  // cron.schedule('0 * * * *', async () => { // Every Hour

  // }, cronOptions());
}

export default setupCron;