import {
  theNeverFapDeluxeDailyNewEpisodeRedditText,
  theWritersDailyNewEpisodeRedditText,
} from '../../../messages/redditMessages';
import { PodcastFeedType } from '../../feedUtil';
import { EpisodeData } from '../../../../types/episodeTypes';
import RedditClient from '../../../../social/redditClient';

const getRedditTitle = (item: EpisodeData, type: PodcastFeedType): string => {
  switch(type) {
    case PodcastFeedType.TheNeverFapDeluxeDaily: {
      return `The NeverFap Deluxe Daily Podcast ${item.title}`;
    }
    case PodcastFeedType.TheWritersDaily: {
      return `The Writer's Daily Podcast ${item.title}`;
    }
  }
};

const getRedditText = (item: EpisodeData, type: PodcastFeedType): string => {
  switch(type) {
    case PodcastFeedType.TheNeverFapDeluxeDaily: {
      return theNeverFapDeluxeDailyNewEpisodeRedditText(item);
    }
    case PodcastFeedType.TheWritersDaily: {
      return theWritersDailyNewEpisodeRedditText(item);
    }
  }
};

const postPodcastEpisodeToReddit = async (redditClient: RedditClient, item: EpisodeData, type: PodcastFeedType) => {
  try {
    const title = getRedditTitle(item, type);
    const text = getRedditText(item, type);

    const submissionName = await redditClient.sendLinkPost({
      title,
      url: item.castboxLink
    });

    await redditClient
      .sendReply({
        submissionName,
        text
      })
  } catch(error) {
    throw new Error(`${error} - postPodcastEpisodeToReddit`);
  }
};

export default postPodcastEpisodeToReddit;
