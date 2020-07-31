const path = require('path');
const { config } = require('dotenv');
config({ path: path.resolve(__dirname, '..', '..', 'deployment', 'environment', '.env') });

module.exports = {
  local: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: path.resolve(__dirname, "sqlite_databases", "dev_database.sqlite")
    },
    seeds: {
      directory: path.resolve(__dirname, "seeds", "dev")
    },
    migrations: {
      directory: path.resolve(__dirname, "migrations")
    }
  },
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: path.resolve(__dirname, "sqlite_databases", "dev_database.sqlite")
    },
    seeds: {
      directory: path.resolve(__dirname, "seeds", "dev")
    },
    migrations: {
      directory: path.resolve(__dirname, "migrations")
    }
  },
  production: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: path.resolve(__dirname, "sqlite_databases", "prod_database.sqlite")
    },
    seeds: {
      directory: path.resolve(__dirname, "seeds", "prod")
    },
    migrations: {
      directory: path.resolve(__dirname, "migrations")
    },
  },
};
