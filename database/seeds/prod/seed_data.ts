import * as Knex from 'knex';

import {
  THE_WRITERS_DAILY_PODCAST_FEED_NAME,
  THE_WRITERS_DAILY_PODCAST_FEED_ID,
  THE_WRITERS_DAILY_PODCAST_FEED_URL,
  THE_WRITERS_DAILY_SUBREDDIT,

  THE_NEVERFAP_DELUXE_DAILY_PODCAST_FEED_NAME,
  THE_NEVERFAP_DELUXE_DAILY_PODCAST_FEED_ID,
  THE_NEVERFAP_DELUXE_DAILY_PODCAST_FEED_URL,

  NEVERFAP_DELUXE_SOCIAL_FEED_NAME,
  NEVERFAP_DELUXE_SOCIAL_FEED_ID,
  NEVERFAP_DELUXE_SOCIAL_FEED_URL,
  NEVERFAP_DELUXE_SUBREDDIT,
} from '../../../src/const';

export async function seed(knex: Knex): Promise<any> {
  const theWritersDailyPodcastFeed = await knex ('feeds').where({ id: THE_WRITERS_DAILY_PODCAST_FEED_ID }).select('id');
  if (!theWritersDailyPodcastFeed) {
    await knex('feeds').insert({
      id: THE_WRITERS_DAILY_PODCAST_FEED_ID,
      url: THE_WRITERS_DAILY_PODCAST_FEED_URL,
      name: THE_WRITERS_DAILY_PODCAST_FEED_NAME,
    });
  }

  const theNeverFapDeluxeDailyPodcastFeed = await knex ('feeds').where({ id: THE_NEVERFAP_DELUXE_DAILY_PODCAST_FEED_ID }).select('id');
  if (!theNeverFapDeluxeDailyPodcastFeed) {
    await knex('feeds').insert({
      id: THE_NEVERFAP_DELUXE_DAILY_PODCAST_FEED_ID,
      url: THE_NEVERFAP_DELUXE_DAILY_PODCAST_FEED_URL,
      name: THE_NEVERFAP_DELUXE_DAILY_PODCAST_FEED_NAME,
    });
  }

  const neverFapDeluxeSocialFeed = await knex ('feeds').where({ id: NEVERFAP_DELUXE_SOCIAL_FEED_ID }).select('id');
  if (!neverFapDeluxeSocialFeed) {
    await knex('feeds').insert({
      id: NEVERFAP_DELUXE_SOCIAL_FEED_ID,
      url: NEVERFAP_DELUXE_SOCIAL_FEED_URL,
      name: NEVERFAP_DELUXE_SOCIAL_FEED_NAME,
    });
  }
};
