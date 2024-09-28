import {usePlayerContext} from "@/src/app/context/PlayersContext"
import Image from "next/image"

interface ClubProps {
	id: string
	name: string
	image: string
	onClick: (_id: string) => void
}

function Player({id, name, image, onClick}: ClubProps) {
	// console.log(userClub)
	const {currentPlayerId} = usePlayerContext()
	console.log(currentPlayerId)
	return (
		<button
			className="flex flex-col justify-center items-center"
			onClick={() => onClick(id)}>
			{currentPlayerId && currentPlayerId === id ? (
				<p className="text-red-500 font-semibold">{name}</p>
			) : (
				<p>{name}</p>
			)}
			{image && (
				<Image width={100} height={100} src={image} alt={`${name} logo`} />
			)}
		</button>
	)
}

export default Player
