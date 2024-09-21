interface ClubProps {
	name: string
	image: string
}

function Club({name, image}: ClubProps) {
	return <div className="flex flex-col bg-slate-400">{name}</div>
}

export default Club
