"use client"

import {useClubContext} from "@/src/app/context/ClubContext"
import {usePlayerContext} from "@/src/app/context/PlayersContext"
import {signOut, useSession} from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

// import React from "react"

const Dashboard = () => {
	const {data: session} = useSession()
	const {currentClub} = useClubContext()
	const {currentPlayer} = usePlayerContext()

	return (
		<>
			<div className="z-20 relative h-full">
				{session ? (
					<>
						<Image
							src={session?.user?.image as string}
							alt="Profile Image"
							width={30}
							height={30}
						/>
						<div>Hej {session?.user?.name}!</div>
						{currentClub?.name ? (
							<div>
								<div className="flex">
									<p>Twój obecny klub: {currentClub?.name} </p>
									<Image
										src={currentClub.image}
										width={40}
										height={40}
										alt={currentClub.name}
									/>
								</div>

								<Link href="/clubs" className="text-red-500">
									Zmień klub
								</Link>
							</div>
						) : (
							<>
								<p>Nie masz jeszcze klubu</p>
								<Link href="/clubs" className="text-red-500">
									Wybierz klub
								</Link>
							</>
						)}
						{currentPlayer?.name ? (
							<>
								<p>Twój piłkarz: {currentPlayer?.name}</p>
								<Link href="/players" className="text-red-500">
									Zmień piłkarza
								</Link>
							</>
						) : (
							<>
								<p>Nie masz jeszcze piłkarza</p>
								<Link href="/players" className="text-red-500">
									Wybierz piłkarza
								</Link>
							</>
						)}

						{/* <Link href="/record-picker" className="text-red-500">
							Select your record
						</Link> */}
						<h2 className="font-bold">Funkcje do dodania:</h2>
						<p>Nazwa użytkownika</p>
						<p>Użytkownik może zagrać jako Gość</p>
						<p>Rekord użytkownika</p>
						<p>Najlepszy zawodnik użytkownika</p>
						<p>Wszystkie bramki użytkownika</p>
						<p>Najlepszy globalny użytkownik</p>
						<Link
							href="/game"
							className="bg-green-300 text-color-dark p-3 inline-block mt-4">
							Graj
						</Link>
						<button onClick={() => signOut()} className="text-blue-500">
							Wyloguj się
						</button>
					</>
				) : (
					<></>
				)}
			</div>
		</>
	)
}

export default Dashboard
