"use client"

import Clubs from "@/src/components/custom/Clubs"
// import {signOut, useSession} from "next-auth/react"
import {useSession} from "next-auth/react"
// import Link from "next/link"
// import {useEffect, useState} from "react"

export default function ClubsPage() {
	const {data: session} = useSession()

	if (!session) {
		return <p>Proszę się zalogować, aby zmienić klub.</p>
	}

	return (
		<div className="flex flex-col h-full">
			<h1 className="text-center text-2xl mb-10">Wybierz swój klub</h1>
			<Clubs />
		</div>
	)
}
