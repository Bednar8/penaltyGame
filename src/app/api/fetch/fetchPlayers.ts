import {ClubType} from "@/types/club"

export const fetchPlayers = async (): Promise<ClubType[]> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/players`) // Endpoint API
	if (!res.ok) {
		throw new Error("Failed to fetch clubs")
	}
	return res.json() // Zakładamy, że odpowiedź to JSON
}
