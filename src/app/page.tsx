"use client"

import Dashboard from "../../components/custom/Dashboard"
import {useSession} from "next-auth/react"
import SignIn from "@/components/custom/SignIn"

export default function Home() {
	const {data: session} = useSession()

	return <div>{session ? <Dashboard /> : <SignIn />}</div>
}
