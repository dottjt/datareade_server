import Knex from 'knex';
declare const knexDiscord: Knex;
export declare type TallyData = {
    totalUsers: number;
    totalAccountabilityMessages: number;
    totalUsersPast24Hours: number;
    totalAccountabilityMessages24Hours: number;
};
export declare const fetchAccountabilityData: () => Promise<TallyData>;
export default knexDiscord;
