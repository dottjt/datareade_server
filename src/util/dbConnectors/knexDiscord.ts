import Knex from 'knex';

// Initialize knex.
const knexDiscord: Knex = Knex({
  client: 'pg',
  connection: {
    host: process.env.DISCORD_POSTGRES_HOST as string,
    port: Number(process.env.DISCORD_CUSTOM_DB_PORT) as number,
    user: process.env.DISCORD_POSTGRES_USER as string,
    password: process.env.DISCORD_POSTGRES_PASSWORD as string,
    database: process.env.DISCORD_POSTGRES_DB as string
  }
});

export type TallyData = {
  totalUsers: number;
  totalAccountabilityMessages: number;
  totalUsersPast24Hours: number;
  totalAccountabilityMessages24Hours: number;
}

export const fetchAccountabilityData = async (): Promise<TallyData> => {
  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));

  const accountabilityMessageCount = await knexDiscord('accountability_reacts').count();
  const accountabilityMessage24HourCount = await knexDiscord('accountability_reacts').whereBetween('created_at', [yesterday, today]).count();

  const dbUsersCount = await knexDiscord('db_users').count();
  const dbUsers24HourCount = await knexDiscord('db_users').whereBetween('created_at', [yesterday, today]).count();

  // TODO
  // - topDBUsers in terms of accountability posting.
  // - topDBUsers in terms of consequtive streak
  // - topDBUsers in terms of lifetime accountability reacts.

  return {
    totalUsers: parseInt(dbUsersCount[0].count as string),
    totalAccountabilityMessages: parseInt(accountabilityMessageCount[0].count as string),
    totalUsersPast24Hours: parseInt(dbUsers24HourCount[0].count as string),
    totalAccountabilityMessages24Hours: parseInt(accountabilityMessage24HourCount[0].count as string),
  }
}

export default knexDiscord;
