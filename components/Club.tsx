import {useState} from "react"

export default function Club() {
	const clubs = ["barcelona", "real madryt", "arsenal"]
	const [curClub, setCurClub] = useState(null)
	function chooseClub(e: any) {
		setCurClub(e.target.textContent)
	}
	return (
		<div className="flex flex-col bg-slate-400">
			{clubs.map((club: string, i: number) => (
				<button onClick={chooseClub} key={i}>
					{club}
				</button>
			))}
			{curClub ? curClub : ""}
		</div>
	)
}
