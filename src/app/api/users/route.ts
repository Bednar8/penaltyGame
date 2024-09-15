import {NextResponse} from "next/server"
import client from "../../../../lib/db" // Ścieżka do pliku db.ts
import {MongoClient} from "mongodb"

export async function GET() {
	const dbClient: MongoClient = await client.connect()
	const db = dbClient.db("PenaltyGame") // Nazwa twojej bazy danych
	const usersCollection = db.collection("users")

	// Pobieramy wszystkich użytkowników
	const users = await usersCollection.find({}).toArray()

	// Zwracamy dane użytkowników
	return NextResponse.json(users)
}
