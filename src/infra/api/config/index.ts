import "dotenv/config";
import { ConfigInterface } from './config.model';

const applicationConfiguration: ConfigInterface = {
  nodePort: <number>Number(<string>process.env.SERVER_PORT) || 4000,
  devMode: <boolean>(process.env.ENV_MODE !== 'production' || false),
  knexConfigToPostgres: {
    client: 'pg',
    connection: {
      database: <string>process.env.DATABASE_POSTGRES || 'shopping_cart_database',
      host: <string>process.env.DATABASE_POTGRES_HOST || 'localhost',
      password: <string>process.env.DATABASE_POSTGRES_PASSWORD || 'shopping_cart_database',
      port: <number>Number(<string>process.env.DATABASE_POSTGRES_PORT) || 5432,
      user: <string>process.env.DATABASE_POSTGRES_USER || 'shopping_cart_database',
    },
    pool: {
      min: 1,
      max: 10
    },
    debug: <boolean>(process.env.KNEX_DEBUG === 'true' || false),
    acquireConnectionTimeout: 5000
  }
}

export { applicationConfiguration };
