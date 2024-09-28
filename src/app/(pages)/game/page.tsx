"use client"

import {useSession} from "next-auth/react"
import Link from "next/link"

export default function ClubsPage() {
	const {data: session} = useSession()

	if (!session) {
		return <p>Proszę się zalogować, aby zmienić klub.</p>
	}

	return (
		<div className="flex flex-col h-full justify-center items-center">
			<h1 className="text-2xl text-center">
				Pokaż na co Cię stać ale nie jeden raz
			</h1>
			<canvas className="w-full max-w-[1000px] h-auto bg-slate-50 rounded-lg"></canvas>
		</div>
	)
}
