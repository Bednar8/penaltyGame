"use client"

import Clubs from "@/components/custom/Clubs"
import {signOut, useSession} from "next-auth/react"
import {useEffect, useState} from "react"

export default function ClubsPage() {
	const {data: session} = useSession()

	if (!session) {
		return <p>Proszę się zalogować, aby zmienić klub.</p>
	}

	return (
		<div>
			{JSON.stringify(session)}
			<h1>Wybierz swój klub</h1>
			<Clubs />
		</div>
	)
}
