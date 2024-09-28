import {FC, ReactNode} from "react"

interface HeadingProps {
	type?: "primary" | "secondary"
	children: ReactNode
}

const Heading: FC<HeadingProps> = ({type = "primary", children}) => {
	return (
		<>
			{type === "primary" ? (
				<h1 className="text-2xl text-center my-10">{children}</h1>
			) : (
				<h3 className="text-xl text-center my-6">{children}</h3>
			)}
		</>
	)
}

export default Heading
