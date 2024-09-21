import Image from "next/image"

interface ClubProps {
	name: string
	image: string
}

function Club({name, image}: ClubProps) {
	return (
		<button className="flex flex-col justify-center items-center">
			<p>{name}</p>
			{image && (
				<Image width={100} height={100} src={image} alt={`${name} logo`} />
			)}
		</button>
	)
}

export default Club
