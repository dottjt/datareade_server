import { EpisodeData } from "@dottjt/datareade";
import { retrieveRandomAdjective } from "../curated/feedUtil";

// THE NEVERFAP DELUXE Daily

export const theNeverFapDeluxeDailyNewEpisodeTumblrText =
  (item: EpisodeData): string => (
`...aaaaand it's another ${retrieveRandomAdjective()} episode from The Reade~!

${item.castboxLink}

${item.content}
Available on Spotify, iTunes, Castbox, Google Podcasts et al.

Website: https://theneverfapdeluxedaily.juliusreade.com
YouTube: https://www.youtube.com/channel/UCHnPAVZax7_QMufnSF8Pc9w
Twitter: https://twitter.com/neverfapdeluxe
Facebook: https://facebook.com/neverfapdeluxe
Reddit: https://reddit.com/r/NeverFapDeluxe
Discord: https://discord.gg/wKh49a6
Instagram: https://instagram.com/neverfap_deluxe
`
);

// THE WRITERS DAILY

export const theWritersDailyNewEpisodeTumblrText =
  (item: EpisodeData): string => (
`...aaaaand it's another ${retrieveRandomAdjective()} episode from The Reade~!

${item.castboxLink}

${item.content}
Available on Spotify, iTunes, Castbox, Google Podcasts et al.

Website: https://thewritersdaily.juliusreade.com
YouTube: https://youtube.com/channel/UCHiMNZ86_zwW1RebKDcZEoQ
Twitter: https://twitter.com/thewritersdaily
Facebook: https://facebook.com/thewritersdaily
Reddit: https://reddit.com/r/TheWritersDaily
Discord: https://discord.gg/7QzqdP7
Instagram: https://instagram.com/thewritersdaily
`
);

