import {NextResponse} from "next/server"
import {getPlayers} from "@/lib/getGameData"

export async function GET() {
	const players = await getPlayers()

	// Zwracamy dane użytkowników
	return NextResponse.json(players)
}
