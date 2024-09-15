"use client"

import {useSession} from "next-auth/react"
// import {getClubs} from "@/lib/getClubs"

export default function ClubsPage() {
	// const clubs = await getClubs()
	const {data: session} = useSession()
	return (
		<>
			{session ? (
				<>
					<div>laal</div>
				</>
			) : (
				<button>YOU ARE NOT LOGGED</button>
			)}
		</>
	)
}
