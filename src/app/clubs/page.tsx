"use client"

import {useSession} from "next-auth/react"
import Club from "../../../components/Club"

export default function ClubsPage() {
	const {data: session} = useSession()
	return <>{session ? <Club /> : <button>YOU ARE NOT LOGGED</button>}</>
}
