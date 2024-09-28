"use client"

import Dashboard from "../components/custom/Dashboard"
import {useSession} from "next-auth/react"
import SignIn from "@/src/components/custom/SignIn"

export default function Home() {
	const {data: session, status} = useSession()

	if (status === "loading") {
		return <div>Ładowanie...</div>
	}

	return <>{session ? <Dashboard /> : <SignIn />}</>
}
