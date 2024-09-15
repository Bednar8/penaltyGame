import {NextResponse} from "next/server"
import {getUsers} from "@/lib/getUsers"

export async function GET() {
	// Pobieramy wszystkich użytkowników
	const users = await getUsers()

	// Zwracamy dane użytkowników
	return NextResponse.json(users)
}
