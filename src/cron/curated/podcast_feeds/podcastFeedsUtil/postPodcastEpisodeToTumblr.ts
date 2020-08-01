import { EpisodeData } from "@dottjt/datareade";
import { PodcastFeedType } from "../../feedUtil";
import {
  theNeverFapDeluxeDailyNewEpisodeTumblrText,
  theWritersDailyNewEpisodeTumblrText
} from "../../../../cron/messages/tumblrMessages";
import TumblrClient from "../../../../social/tumblrClient";

const getTumblrTitle = (item: EpisodeData, type: PodcastFeedType): string => {
  switch(type) {
    case PodcastFeedType.TheNeverFapDeluxeDaily: {
      return `The NeverFap Deluxe Daily ${item.title}`;
    }
    case PodcastFeedType.TheWritersDaily: {
      return `The Writer's Daily ${item.title}`;
    }
  }
};

const getTumblrText = (item: EpisodeData, type: PodcastFeedType): string => {
  switch(type) {
    case PodcastFeedType.TheNeverFapDeluxeDaily: {
      return theNeverFapDeluxeDailyNewEpisodeTumblrText(item);
    }
    case PodcastFeedType.TheWritersDaily: {
      return theWritersDailyNewEpisodeTumblrText(item);
    }
  }
};

const postPodcastEpisodeToTumblr = async (tumblrClient: TumblrClient, item: EpisodeData, type: PodcastFeedType) => {
  await tumblrClient.sendTextPost({
    title: getTumblrTitle(item, type),
    body: getTumblrText(item, type),
  });
};

export default postPodcastEpisodeToTumblr;
