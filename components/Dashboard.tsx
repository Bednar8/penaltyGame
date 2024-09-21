"use client"

import {signIn, signOut, useSession} from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

import React from "react"

const Dashboard = () => {
	const {data: session} = useSession()
	return (
		<>
			<div className="z-20 relative">
				{session ? (
					<>
						<Image
							src={session?.user?.image as string}
							alt="Profile Image"
							width={100}
							height={100}
						/>
						<div>{session?.user?.name}</div>
						<h1>Session</h1>
						<Link href="/club-picker">Choose your club</Link>
						<Link href="/record-picker">Select your record</Link>
						<Link href="/player-picker">Choose your player</Link>
						<button onClick={() => signOut()}>Sign out</button>
					</>
				) : (
					<>
						<h1>Please log in</h1>
						<button onClick={() => signIn("google")}>
							Sign in with google
						</button>
						<button onClick={() => signIn("github")}>
							Sign in with github
						</button>
					</>
				)}
			</div>
		</>
	)
}

export default Dashboard
