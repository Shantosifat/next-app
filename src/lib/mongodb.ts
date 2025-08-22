import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);
let dbClient: MongoClient | null = null;

export async function getDbClient() {
  if (!dbClient) {
    dbClient = await client.connect();
  }
  return dbClient;
}
