import {usePlayerContext} from "@/src/app/context/PlayersContext"
import Image from "next/image"
import {useEffect} from "react"
interface ClubProps {
	id: string
	name: string
	image: string
	onClick: (_id: string) => void
}

function Player({id, name, image, onClick}: ClubProps) {
	const {currentPlayerId} = usePlayerContext()

	return (
		<button
			className="flex flex-col justify-center items-center"
			onClick={() => onClick(id)}>
			<div style={{height: "200px"}}>
				{image && (
					<Image
						src={image}
						alt={`${name} logo`}
						height={200}
						width={200} // Możemy pominąć szerokość, stylując ją przez CSS
						style={{
							width: "100%",
							height: "100%",
							objectFit: "contain",
						}}
					/>
				)}
			</div>
			{currentPlayerId && currentPlayerId === id ? (
				<p className="text-red-500 font-semibold">{name}</p>
			) : (
				<p>{name}</p>
			)}
		</button>
	)
}

export default Player
