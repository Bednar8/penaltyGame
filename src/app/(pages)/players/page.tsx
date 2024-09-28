"use client"

import Clubs from "@/src/components/custom/Clubs"
import Players from "@/src/components/custom/Players"
import {signOut, useSession} from "next-auth/react"
import Link from "next/link"
// import {useEffect, useState} from "react"

export default function ClubsPage() {
	const {data: session} = useSession()

	if (!session) {
		return <p>Proszę się zalogować, aby zmienić klub.</p>
	}

	return (
		<div>
			{JSON.stringify(session)}
			<h1>Wybierz swojego zawodnika</h1>
			<Players />
			<Link href="/">Strona główna</Link>
		</div>
	)
}
