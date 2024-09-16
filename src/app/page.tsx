"use client"

import Dashboard from "../../components/Dashboard"
import {signOut, useSession} from "next-auth/react"
import {useEffect, useState} from "react"

type Club = {
	_id: string
	name: string
	club: string
}
export default function Home() {
	const {data: session} = useSession()
	const [players, setPlayers] = useState<Club[]>([])

	useEffect(() => {
		async function fetchPlayers() {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/players`)
			const clubs = await res.json()
			setPlayers(clubs)
		}

		fetchPlayers()
	}, [])
	return (
		<main>
			{session ? (
				<div>
					{players.map((club) => (
						<div className="text-color-dark bg-white" key={club._id}>
							{club.name}
						</div>
					))}
					<button onClick={() => signOut()}>Sign out</button>
				</div>
			) : (
				<Dashboard />
			)}
		</main>
	)
}
