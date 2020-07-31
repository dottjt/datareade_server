import { MessageEmbed } from 'discord.js';
import { PodcastFeedType } from '../../feedUtil';
import { EpisodeData } from '../../../../types/episodeTypes';
import {
  theNeverFapDeluxeDailyNewEpisodeDiscordEmbed,
  theWritersDailyNewEpisodeDiscordEmbed
} from '../../../../cron/messages/discordMessages';
import DiscordClient from '../../../../social/discordClient';

const getDiscordChannnelId = (type: PodcastFeedType): string => {
  switch(type) {
    case PodcastFeedType.TheNeverFapDeluxeDaily: {
      return process.env.RECOVERYCHAT_NEVERFAPDELUXEPODCAST as string;
    }
    case PodcastFeedType.TheWritersDaily: {
      return '714384916309213264'; // podcasts channel in The Writer's Daily discord server
    }
  }
};

const getDiscordMessageEmbed = (item: EpisodeData, type: PodcastFeedType): MessageEmbed => {
  switch(type) {
    case PodcastFeedType.TheNeverFapDeluxeDaily: {
      return theNeverFapDeluxeDailyNewEpisodeDiscordEmbed(item);
    }
    case PodcastFeedType.TheWritersDaily: {
      return theWritersDailyNewEpisodeDiscordEmbed(item);
    }
  }
};

const getDiscordTextMessage = (item: EpisodeData, type: PodcastFeedType): string => {
  switch(type) {
    case PodcastFeedType.TheNeverFapDeluxeDaily: {
      return `${item.title}\n\nPodcast Link: ${item.castboxLink}`;
    }
    case PodcastFeedType.TheWritersDaily: {
      return `${item.title}\n\nPodcast Link: ${item.castboxLink}`;
    }
  }
};

const postPodcastEpisodeToDiscord = async (discordClient: DiscordClient, item: EpisodeData, type: PodcastFeedType) => {
  const channelId = getDiscordChannnelId(type);
  const messageEmbed = getDiscordMessageEmbed(item, type);

  await discordClient.sendChannelTextMessage({
    channelId,
    text: getDiscordTextMessage(item, type),
  });

  await discordClient.sendChannelMessageEmbed({
    channelId,
    messageEmbed,
  });
};

export default postPodcastEpisodeToDiscord;
