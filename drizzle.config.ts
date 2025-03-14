import type { Config } from 'drizzle-kit';

export default {
  schema: './app/bookmarks/schema.ts',
  out: './app/bookmarks/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRESQL_ENDPOINT!,
    host: 'localhost',
    port: 5432,
    user: 'bifrost',
    password: 'night343',
    database: 'my_store',
  },
} satisfies Config;
