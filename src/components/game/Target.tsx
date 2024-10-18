import shoot from "@/src/app/gameLogic/shoot"

interface TargetProps {
	number: number
}

function Target({number}: TargetProps) {
	return (
		<button
			className="w-12 h-12 bg-slate-500 m-3"
			onClick={() => shoot(number)}>
			{number}
		</button>
	)
}

export default Target
