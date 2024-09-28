import {signIn} from "next-auth/react"
import GoogleButton from "../ui/GoogleButton"
import Heading from "../ui/Heading"
import Button from "../ui/Button"

function SignIn() {
	return (
		<div>
			<Heading>PenaltyGame</Heading>
			<div className="flex flex-col justify-center items-center h-full ">
				<div className="flex flex-col  w-full max-w-[500px] h-[400px] justify-center items-center bg-[#0000004b] rounded-xl gap-4 sign-in-box">
					<Heading type="secondary">Zaloguj się aby zagrać</Heading>
					<GoogleButton />
					<p className="border-y border-gray-400 w-full text-center py-2">
						Lub
					</p>
					<Button disabled={true}>Zagraj jako gość</Button>
					{/* <button onClick={() => signIn("github")}>Sign in with github</button> */}
				</div>
			</div>
		</div>
	)
}

export default SignIn
