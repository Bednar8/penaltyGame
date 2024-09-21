"use client"

import Clubs from "@/components/custom/Clubs"
import Dashboard from "../../components/Dashboard"
import {signOut, useSession} from "next-auth/react"
import {useEffect, useState} from "react"

type Club = {
	_id: string
	name: string
	image: string
}

export default function Home() {
	const {data: session} = useSession()
	const [curClub, setCurClub] = useState<Club[]>([])

	useEffect(() => {
		async function saveClub() {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/clubs`)
			const clubs = await res.json()
			console.log(clubs)
			setCurClub(clubs)
		}

		saveClub()
	}, [])
	return (
		<main className="flex justify-center items-center h-screen">
			<div className="bg-[#00000084] z-10 relative backdrop-blur-md h-3/4 w-3/4 flex justify-center items-center rounded-lg">
				{session ? (
					<div className="z-20 relative w-full">
						<Clubs />
						<button onClick={() => signOut()}>Wyloguj się</button>
						<button className="ml-6">Zapisz</button>
					</div>
				) : (
					<Dashboard />
				)}
			</div>
		</main>
	)
}
