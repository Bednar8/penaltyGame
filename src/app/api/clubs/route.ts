import {NextResponse} from "next/server"
import {getClubs} from "@/lib/getGameData"

export async function GET() {
	const clubs = await getClubs()

	// Zwracamy dane użytkowników
	return NextResponse.json(clubs)
}
