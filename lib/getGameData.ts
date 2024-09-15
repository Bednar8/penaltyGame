import client from "./db"
import {MongoClient} from "mongodb"

async function connectDb() {
	const dbClient: MongoClient = await client.connect()
	const db = dbClient.db(process.env.DB_NAME) // Nazwa twojej bazy danych
	const usersCollection = db.collection("gameData")

	return await usersCollection.find({}).toArray()
}

export async function getPlayers() {
	const data = await connectDb()
	const allPlayers = data.map((club) => club.players).flat()
	return allPlayers
}

export async function getClubs() {
	const data = await connectDb()
	const clubs = data.map((club) => club)
	console.log(clubs)
	return clubs
}
