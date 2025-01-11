import { defineConfig } from "drizzle-kit";
import {config} from 'dotenv'

config({
    path: '.env.local'
})
export default defineConfig({
  dialect: "postgresql",
  schema: "./server/schema.ts",
  out: "./server/migration",
  dbCredentials: {
    url: process.env.DATABASE_URL!
  }
});
