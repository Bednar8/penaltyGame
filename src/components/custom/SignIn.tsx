import {signIn} from "next-auth/react"
import GoogleButton from "../ui/GoogleButton"

function SignIn() {
	return (
		<div>
			<h1>Zaloguj się aby zagrać</h1>
			<GoogleButton />
			<button onClick={() => signIn("github")}>Sign in with github</button>
		</div>
	)
}

export default SignIn
