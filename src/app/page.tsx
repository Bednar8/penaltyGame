"use client"

import Dashboard from "../../components/custom/Dashboard"
import {useSession} from "next-auth/react"
import SignIn from "@/components/custom/SignIn"

export default function Home() {
	const {data: session} = useSession()

	return (
		<main className="flex justify-center items-center h-screen">
			<div className="bg-[#00000084] z-10 relative backdrop-blur-md h-3/4 w-3/4 flex justify-center items-center rounded-lg">
				{session ? <Dashboard /> : <SignIn />}
			</div>
		</main>
	)
}
