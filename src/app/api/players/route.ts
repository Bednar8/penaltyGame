import {NextResponse} from "next/server"
import client from "../../../../lib/db" // Ścieżka do pliku db.ts
import {MongoClient} from "mongodb"

export async function GET() {
	const dbClient: MongoClient = await client.connect()
	const db = dbClient.db("PenaltyGame") // Nazwa twojej bazy danych
	const playersCollection = db.collection("players")

	// Pobieramy wszystkich użytkowników
	const players = await playersCollection.find({}).toArray()

	// Zwracamy dane użytkowników
	return NextResponse.json(players)
}
