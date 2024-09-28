"use client"

import Dashboard from "../components/custom/Dashboard"
import {useSession} from "next-auth/react"
import SignIn from "@/src/components/custom/SignIn"
import Spinner from "../components/ui/Spinner"

export default function Home() {
	const {data: session, status} = useSession()

	if (status === "loading") {
		return <Spinner />
	}

	return <>{session ? <Dashboard /> : <SignIn />}</>
}
