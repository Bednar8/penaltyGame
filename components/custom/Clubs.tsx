"use client"

import Club from "../ui/Club"
import {useEffect, useState} from "react"

type Club = {
	_id: string
	name: string
}

function Clubs() {
	const [clubs, setClubs] = useState<Club[]>([])

	useEffect(() => {
		async function fetchClubs() {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/clubs`)
			const clubs = await res.json()
			console.log(clubs)
			setClubs(clubs)
		}

		fetchClubs()
	}, [])

	return (
		<div>
			{clubs.map((club) => (
				<Club key={club._id} name={club.name} />
			))}
		</div>
	)
}

export default Clubs
