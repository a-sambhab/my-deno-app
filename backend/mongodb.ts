import {MongoClient, Bson} from "https://deno.land/x/mongo@v0.32.0/mod.ts";

const client = new MongoClient();

await client.connect("mongodb+srv://newtrial:ncQ2hXYHLBJ1ApJw@cluster0.zcw1uq9.mongodb.net/library?authMechanism=SCRAM-SHA-1")

const db = client.database('library');

export default db;