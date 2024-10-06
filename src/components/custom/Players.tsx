// "use client"

import {useClubContext} from "@/src/app/context/ClubContext"
import Player from "../ui/Player"
import {usePlayerContext} from "@/src/app/context/PlayersContext"
import Button from "../ui/Button"
import {useEffect, useState} from "react"

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

	return (
		<div className="flex flex-col h-full justify-between">
			<div className="flex justify-evenly items-center">
				{players?.map((player: PlayerType) => (
					<Player
						id={player._id}
						key={player._id}
						name={player.name}
						image={player.image}
						onClick={handleChoosePlayer}
					/>
				))}
			</div>
			<div className="text-center">
				<Button onClick={() => handleSavePlayer(currentPlayerId)}>
					Zapisz piłkarza
				</Button>
			</div>
		</div>
	)
}

export default Players
