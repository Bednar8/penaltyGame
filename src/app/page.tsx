"use client"

import Clubs from "@/components/custom/Clubs"
import Dashboard from "../../components/Dashboard"
import {signOut, useSession} from "next-auth/react"
import {useEffect, useState} from "react"

type Club = {
	_id: string
	name: string
}

export default function Home() {
	const {data: session} = useSession()
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
		<main className="flex justify-center items-center h-screen">
			<div className="bg-[#00000084] z-10 relative backdrop-blur-md h-3/4 w-[600px] flex justify-center items-center rounded-lg">
				{session ? (
					<div className="z-20 relative">
						<Clubs />
						<button onClick={() => signOut()}>Sign out</button>
					</div>
				) : (
					<Dashboard />
				)}
			</div>
		</main>
	)
}
