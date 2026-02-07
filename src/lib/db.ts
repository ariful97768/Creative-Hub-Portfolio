import { MongoClient, ServerApiVersion } from "mongodb";
import { Testimonial, Team, Project } from "./type";
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI environment variable is not defined.");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (!(global as any)._mongoClientPromise) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any)._mongoClientPromise = client.connect();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const clientPromise: Promise<MongoClient> = (global as any)._mongoClientPromise;

const database = (async () => {
  const c = await clientPromise;
  return c.db("creative-hub");
})();

async function getDb() {
  const db = await database;
  const collection = {
    teams: db.collection<Team>("teams"),
    projects: db.collection<Project>("projects"),
    testimonials: db.collection<Testimonial>("testimonials"),
  };
  return collection;
}

export default getDb;

/**
 * Used the global variable to store the client promise to prevent
 * creating a new connection on every request.
 * Although this is not the best practice, it is to prevent a new connection
 * on the website each time a user requests a page.
 */
