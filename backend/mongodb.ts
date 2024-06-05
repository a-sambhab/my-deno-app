import {MongoClient, Bson} from "https://deno.land/x/mongo@v0.32.0/mod.ts";

const client = new MongoClient();

await client.connect("mongodb+srv://<username>:<password>@<cluster_url>/<database_name>?authMechanism=SCRAM-SHA-1")

const db = client.database('library');

export default db;
