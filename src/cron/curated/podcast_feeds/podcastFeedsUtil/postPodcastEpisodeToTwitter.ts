import { EpisodeData } from "../../../../types/episodeTypes";
import { PodcastFeedType } from "../../feedUtil";
import TwitterClient from "../../../../social/twitterClient";
import {
  theNeverFapDeluxeDailyNewEpisodeTwitterText,
  theWritersDailyNewEpisodeTwitterText
} from "../../../../cron/messages/twitterMessages";

const getTwitterText = (item: EpisodeData, type: PodcastFeedType): string => {
  switch(type) {
    case PodcastFeedType.TheNeverFapDeluxeDaily: {
      return theNeverFapDeluxeDailyNewEpisodeTwitterText(item);
    }
    case PodcastFeedType.TheWritersDaily: {
      return theWritersDailyNewEpisodeTwitterText(item);
    }
  }
};

const postEpisodeToTwitter = async (twitterClient: TwitterClient, item: EpisodeData, type: PodcastFeedType) => {
  await twitterClient.sendTextPost({
    text: getTwitterText(item, type),
  });
};

export default postEpisodeToTwitter;
