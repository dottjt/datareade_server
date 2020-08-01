import { EpisodeData } from "@dottjt/datareade";

// THE NEVERFAP DELUXE Daily

export const theNeverFapDeluxeDailyNewEpisodeTwitterText =
  (item: EpisodeData): string => (
`${item.title} #TheNeverFapDeluxeDaily ${item.castboxLink}`
);

// THE WRITERS DAILY

export const theWritersDailyNewEpisodeTwitterText =
  (item: EpisodeData): string => (
`${item.title} #TheWritersDaily ${item.castboxLink}`
);

