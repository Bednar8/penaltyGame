import {useClubContext} from "@/src/app/context/ClubContext"
import Image from "next/image"

interface ClubProps {
	id: string
	name: string
	image: string
	onClick: (_id: string) => void
}

function Club({id, name, image, onClick}: ClubProps) {
	// console.log(userClub)
	const {currentClubId} = useClubContext()
	console.log(currentClubId)
	return (
		<div>
			<button
				className="flex flex-col justify-center items-center"
				onClick={() => onClick(id)}>
				{currentClubId && currentClubId === id ? (
					<p className="text-red-500 font-semibold">{name}</p>
				) : (
					<p>{name}</p>
				)}
				{image && (
					<Image width={100} height={100} src={image} alt={`${name} logo`} />
				)}
			</button>
		</div>
	)
}

export default Club
