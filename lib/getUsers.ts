import client from "./db"
import {MongoClient} from "mongodb"

export async function getUsers() {
	const dbClient: MongoClient = await client.connect()
	const db = dbClient.db(process.env.DB_NAME) // Nazwa twojej bazy danych
	const usersCollection = db.collection("users")
	return await usersCollection.find({}).toArray()
}
