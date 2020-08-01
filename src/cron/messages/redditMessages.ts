import { EpisodeData } from '@dottjt/datareade';
import { breakUpContent, retrieveRandomAdjective } from "../curated/feedUtil";

// THE NEVERFAP DELUXE DAILY

export const theNeverFapDeluxeDailyNewEpisodeRedditText = (item: EpisodeData) => (
`Another ${retrieveRandomAdjective()} episode of The NeverFap Deluxe Daily has been released into the wild!

${item.castboxLink}

${breakUpContent(item.content, 'neverfapdeluxe@gmail.com')}

Available on Spotify, iTunes, Castbox, Google Podcasts et al.

Website: https://theneverfapdeluxedaily.juliusreade.com\n
YouTube: https://www.youtube.com/channel/UCHnPAVZax7_QMufnSF8Pc9w\n
Twitter: https://twitter.com/neverfapdeluxe\n
Facebook: https://facebook.com/neverfapdeluxe\n
Discord: https://discord.gg/wKh49a6\n
Instagram: https://instagram.com/neverfap_deluxe\n
`
);

// THE WRITERS DAILY

export const theWritersDailyNewEpisodeRedditText = (item: EpisodeData) => (
`Another ${retrieveRandomAdjective()} episode of The Writer's Daily has been released into the wild!

${item.castboxLink}

${breakUpContent(item.content, 'thewritersdailypodcast@gmail.com')}

Available on Spotify, iTunes, Castbox, Google Podcasts et al.

Website: https://thewritersdaily.juliusreade.com\n
YouTube: https://youtube.com/channel/UCHiMNZ86_zwW1RebKDcZEoQ\n
Twitter: https://twitter.com/thewritersdaily\n
Facebook: https://facebook.com/thewritersdaily\n
Discord: https://discord.gg/7QzqdP7\n
Instagram: https://instagram.com/thewritersdaily\n
`
);
