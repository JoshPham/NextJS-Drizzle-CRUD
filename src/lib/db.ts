import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { query } from "./query";

export const POSTGRES_URL = process.env.DATABASE_URL!;

const pool = new Pool({
  connectionString: POSTGRES_URL,
});


export const db = drizzle({ client: pool });