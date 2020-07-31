import { PodcastFeedType } from '../../feedUtil';
import { EpisodeData } from '../../../../types/episodeTypes';
import DiscordClient from '../../../../social/discordClient';
declare const postPodcastEpisodeToDiscord: (discordClient: DiscordClient, item: EpisodeData, type: PodcastFeedType) => Promise<void>;
export default postPodcastEpisodeToDiscord;
