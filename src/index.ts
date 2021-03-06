import path from 'path';

// ENV
import { config } from 'dotenv';
config({ path: path.resolve(__dirname, '..', 'deployment', 'environment', '.env') });

// Dependencies
import Koa from 'koa';
import Router from '@koa/router';
import cors from '@koa/cors';

import bodyParser from 'koa-body';
import logger from 'koa-logger';
import serve from 'koa-static';
import session from 'koa-session';

// Logging Data
import ourLogger from './util/logger';
import { data } from '@dottjt/datareade';

// Routes
import example from './routes/example';
import {
  twitterConnect,
  twitterCallback
} from './routes/authorize_twitter';

// Other
import setupCron from './cron';
import setupNFDCron from './NFDcron';

// TEST
// import { theWritersDailyPodcastClient } from './social/clientUtil';
// import axios from 'axios';
// import { selectRandomPost } from './util/util';

import theNeverFapDeluxeDailyPodcastFeed from './cron/curated/podcast_feeds/theNeverFapDeluxeDailyPodcastFeed';
import theWritersDailyPodcastFeed from './cron/curated/podcast_feeds/theWritersDailyPodcastFeed';


// Main
const main = async () => {
  const app = new Koa();
  const router = new Router();

  router.get('/test', (ctx) => { ctx.body = 'cake' });
  router.post('/example', example);
  router.get('/twitter/connect', twitterConnect);
  router.get('/twitter/callback', twitterCallback);

  await setupCron();
  await setupNFDCron();

  ourLogger.info(`${data.episodesTNDD[data.episodesTNDD.length - 1].title} - ${data.episodesTNDD[data.episodesTNDD.length - 1].date.split('T')[0]}`);
  ourLogger.info(`${data.episodesTWD[data.episodesTWD.length - 1].title} - ${data.episodesTWD[data.episodesTWD.length - 1].date.split('T')[0]}`);

  theNeverFapDeluxeDailyPodcastFeed();
  theWritersDailyPodcastFeed();

  app.keys = [process.env.SIGNING_COOKIE_KEYS as string];

  app
    .use(bodyParser())
    .use(cors())
    .use(logger())
    .use(session(app))
    .use(router.routes())
    .use(router.allowedMethods())
    .use(serve(path.resolve(__dirname, 'server', 'static')))
    .listen(7777)
}

main();
