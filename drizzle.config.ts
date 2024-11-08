import { POSTGRES_URL } from "@/lib/db";
import { defineConfig } from "drizzle-kit";
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

console.log("Database URL from .env.local:", process.env.DATABASE_URL);

export default defineConfig({
  out: "./drizzle",
  dialect: "postgresql",
  schema: "./src/lib/schema/*",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },

  extensionsFilters: ["postgis"],
  schemaFilter: "public",
  tablesFilter: "*",

  introspect: {
    casing: "camel",
  },

  migrations: {
    prefix: "timestamp",
    table: "__drizzle_migrations__",
    schema: "public",
  },

  entities: {
    roles: {
      provider: '',
      exclude: [],
      include: []
    }
  },

  breakpoints: true,
  strict: true,
  verbose: true,
});