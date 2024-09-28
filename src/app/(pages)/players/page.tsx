"use client"

import Clubs from "@/src/components/custom/Clubs"
import Players from "@/src/components/custom/Players"
import Heading from "@/src/components/ui/Heading"
import {signOut, useSession} from "next-auth/react"
import Link from "next/link"
// import {useEffect, useState} from "react"

export default function ClubsPage() {
	const {data: session} = useSession()

	if (!session) {
		return <p>Proszę się zalogować, aby zmienić klub.</p>
	}

	return (
		<div className="flex flex-col h-full">
			<Heading type="primary">Wybierz swojego zawodnika</Heading>
			<Players />
		</div>
	)
}
