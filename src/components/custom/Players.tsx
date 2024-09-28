// "use client"

import {useQuery} from "@tanstack/react-query"
import {ClubType} from "@/types/club"
import {useEffect, useState} from "react"
import {fetchClubs} from "@/src/app/api/fetch/fetchClubs"
import Club from "../ui/Club"
import {useSession} from "next-auth/react"
import {useClubsContext} from "@/src/app/context/ClubsContext"
import Link from "next/link"
import {useClubContext} from "@/src/app/context/ClubContext"
import Player from "../ui/Player"
import {usePlayerContext} from "@/src/app/context/PlayersContext"

interface PlayerType {
	_id: string
	name: string
	image: string
	onClick: (_id: string) => void
}
function Players() {
	const {currentClub} = useClubContext()
	const {handleChoosePlayer, handleSavePlayer, currentPlayerId} =
		usePlayerContext()

	const players = currentClub?.players
	console.log(players)

	return (
		<div className="flex justify-evenly w-full">
			{players?.map((player: PlayerType) => (
				<Player
					id={player._id}
					key={player._id}
					name={player.name}
					image={player.image}
					onClick={handleChoosePlayer}
				/>
			))}
			<button onClick={() => handleSavePlayer(currentPlayerId)}>
				Zapisz piłkarza
			</button>
			{/* {clubId || currentClub ? (
				<Link href="/players" aria-disabled="true">
					Wybierz piłkarza
				</Link>
			) : (
				<span className="text-gray-400 cursor-not-allowed">
					Wybierz piłkarza
				</span>
			)} */}
		</div>
	)
}

export default Players
