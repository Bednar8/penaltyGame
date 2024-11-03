"use client"

import {useClubContext} from "@/src/app/context/ClubContext"
import {usePlayerContext} from "@/src/app/context/PlayersContext"
import {useSession} from "next-auth/react"
// import Image from "next/image"
import Link from "next/link"
// import Button from "../ui/Button"
import Spinner from "../ui/Spinner"
import CurrentClub from "./CurrentClub"
import CurrentPlayer from "./CurrentPlayer"

// import React from "react"

const Dashboard = () => {
	const {data: session, status} = useSession()
	const {currentClub} = useClubContext()
	const {currentPlayer} = usePlayerContext()

	if (status === "loading") {
		return <Spinner />
	}

	return (
		<div className="z-20 relative h-full flex flex-col justify-between">
			{session ? (
				<>
					<div className="flex justify-center items-center gap-16 mt-8">
						<CurrentClub currentClub={currentClub} />
						<CurrentPlayer currentPlayer={currentPlayer} />
					</div>

					<div className="flex justify-center items-center">
						<Link href="/game" className="game-btn">
							Graj
						</Link>
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	)
}

export default Dashboard
