"use client"

import {useSession} from "next-auth/react"
import Link from "next/link"

export default function ClubsPage() {
	const {data: session} = useSession()

	if (!session) {
		return <p>Proszę się zalogować, aby zmienić klub.</p>
	}

	return (
		<>
			<h1 className="text-2xl text-center">
				Pokaż na co Cię stać ale nie jeden raz
			</h1>
			<canvas className="w-full h-full bg-slate-50 rounded-lg"></canvas>
			<Link href="/">Strona główna</Link>
		</>
	)
}
