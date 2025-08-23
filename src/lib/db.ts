import clientPromise from "./mongodb";

export async function getDb() {
  const client = await clientPromise; // just await the clientPromise
  return client.db(process.env.MONGODB_DB); // use your DB name
}
