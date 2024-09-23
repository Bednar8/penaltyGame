import Image from "next/image"

interface ClubProps {
	id: string
	name: string
	image: string
	userClub: string
	onClick: (_id: string) => void
}

function Club({id, name, image, userClub, onClick}: ClubProps) {
	return (
		<button
			className="flex flex-col justify-center items-center"
			onClick={() => onClick(id)}>
			{userClub && userClub === id ? (
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

export default Club
