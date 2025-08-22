// lib/db.ts
import { getDbClient } from "./mongodb";

export async function getDb() {
  const client = await getDbClient();
  const dbName = process.env.MONGODB_DB || "nextApp"; // fallback
  return client.db(dbName);
}
