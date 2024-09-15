import {getClubs} from "@/lib/getGameData"
import Dashboard from "../../components/Dashboard"

export default async function Home() {
	const clubs = await getClubs()
	return (
		<main>
			{clubs.map((club) => club.club)}
			<Dashboard />
		</main>
	)
}
