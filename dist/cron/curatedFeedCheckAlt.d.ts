import { SocialFeedData } from '../types/feedTypes';
import { EpisodeData } from '../types/episodeTypes';
declare type curatedFeedCheck10MinutesProps = {
    feedId: string;
    items: SocialFeedData[] | EpisodeData[];
};
declare const curatedFeedCheck10Minutes: ({ feedId, items }: curatedFeedCheck10MinutesProps) => Promise<SocialFeedData[] | EpisodeData[]>;
export default curatedFeedCheck10Minutes;
