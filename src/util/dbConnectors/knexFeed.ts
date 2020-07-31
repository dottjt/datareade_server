import Knex from 'knex';
import path from 'path';

const database = process.env.NODE_ENV !== 'production' ? 'dev_database.sqlite' : 'prod_database.sqlite';

console.log(path.resolve(__dirname, "..", "..", "database", "sqlite_databases", database));
// Initialize knex.
const knexFeed = Knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, "..", "..", "..", "database", "sqlite_databases", database),
  },
  useNullAsDefault: true
});

export default knexFeed;
