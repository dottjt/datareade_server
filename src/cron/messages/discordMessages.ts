import { MessageEmbed } from 'discord.js';
import { SocialFeedData, AggregatedDBFeedItem } from '../../types/feedTypes';
import { EpisodeData } from '../../types/episodeTypes';
import { retrieveRandomAdjective } from '../curated/feedUtil';

// THE NEVERFAP DELUXE DAILY

export const theNeverFapDeluxeDailyNewEpisodeDiscordEmbed =
  (item: EpisodeData): MessageEmbed => new MessageEmbed()
    // .setTitle(item.title)
    .setDescription(
`Another ${retrieveRandomAdjective()} episode from The Reade:tm: :v:

Available on Spotify, iTunes, Castbox, Google Podcasts et al.

Website: https://theneverfapdeluxedaily.juliusreade.com
YouTube: https://www.youtube.com/channel/UCHnPAVZax7_QMufnSF8Pc9w
Twitter: https://twitter.com/neverfapdeluxe
Facebook: https://facebook.com/neverfapdeluxe
Reddit: https://reddit.com/r/NeverFapDeluxe
Instagram: https://instagram.com/neverfap_deluxe
`
);

// THE WRITERS DAILY

export const theWritersDailyNewEpisodeDiscordEmbed =
  (item: EpisodeData): MessageEmbed => new MessageEmbed()
    // .setTitle(item.title)
    .setDescription(
`Another ${retrieveRandomAdjective()} episode from The Reade:tm: :v:

Available on Spotify, iTunes, Castbox, Google Podcasts et al.

Website: https://thewritersdaily.juliusreade.com
YouTube: https://youtube.com/channel/UCHiMNZ86_zwW1RebKDcZEoQ
Twitter: https://twitter.com/thewritersdaily
Facebook: https://facebook.com/thewritersdaily
Reddit: https://reddit.com/r/TheWritersDaily
Instagram: https://instagram.com/thewritersdaily
`
);
