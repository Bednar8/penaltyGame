"use client"

import {signOut, useSession} from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

function Header() {
	const {data: session} = useSession()
	return (
		<header>
			{session ? (
				<div className="flex justify-between items-center">
					<Link href="/">
						<Image
							src="/img/logo.webp" // Ścieżka względem katalogu public
							alt="Logo"
							width={40} // Zastąp odpowiednimi wartościami szerokości i wysokości
							height={40}
						/>
					</Link>
					<div className="flex items-center gap-3">
						<button onClick={() => signOut()}>Wyloguj się</button>
						<Image
							src={session?.user?.image as string}
							alt="Profile Image"
							width={40}
							height={40}
						/>
						<div>Hej {session?.user?.name}!</div>
					</div>
				</div>
			) : (
				""
			)}
		</header>
	)
}

export default Header
