import {NextResponse} from "next/server"
import client from "../../../../../lib/db" // Ścieżka do pliku db.ts
import {MongoClient, ObjectId} from "mongodb"
import {getServerSession} from "next-auth/next"
import {authOptions} from "../../../../../lib/authOptions" // Import konfiguracji NextAuth

export async function POST(req: Request) {
	// Pobierz sesję użytkownika (tylko zalogowani użytkownicy mogą aktualizować swoje dane)
	const session = await getServerSession(authOptions)

	if (!session) {
		return NextResponse.json({message: "Nie jesteś zalogowany."}, {status: 401})
	}

	const {player} = await req.json() // Pobierz nowy kolor z ciała żądania

	if (!player) {
		return NextResponse.json({message: "Kolor jest wymagany."}, {status: 400})
	}

	const dbClient: MongoClient = await client.connect()
	const db = dbClient.db("PenaltyGame")
	const usersCollection = db.collection("gameData")

	// Zaktualizuj kolor użytkownika na podstawie jego adresu email
	const result = await usersCollection.updateOne(
		{email: session.user?.email}, // Szukaj użytkownika po emailu z sesji
		{$set: {player: player}} // Zaktualizuj pole "color"
	)

	if (result.matchedCount === 0) {
		return NextResponse.json(
			{message: "Nie znaleziono użytkownika."},
			{status: 404}
		)
	}

	return NextResponse.json({message: "Kolor zaktualizowany."}, {status: 200})
}
