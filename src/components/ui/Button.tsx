import {FC, ReactNode} from "react"

interface ButtonProps {
	type?: "primary" | "secondary"
	disabled?: boolean
	children: ReactNode
	onClick?: () => void
}

const Button: FC<ButtonProps> = ({
	type = "primary",
	children,
	onClick,
	disabled,
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${
				type === "primary" ? "bg-color-main text-color-dark " : ""
			} ${
				disabled ? "bg-slate-500 cursor-not-allowed" : ""
			} py-1 px-4 rounded-md button`}>
			{children}
		</button>
	)
}

export default Button
