interface TargetProps {
	number: number
	onClick: (user: number | undefined) => void
	// computer: number | undefined
}

function Target({number, onClick}: TargetProps) {
	return (
		<button
			className="w-12 h-12 bg-slate-500 m-3"
			onClick={() => onClick(number)}>
			{number}
		</button>
	)
}

export default Target
