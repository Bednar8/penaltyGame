"use client"

import Dashboard from "../../components/Dashboard"

interface User {
	_id: string
	name: string
	email: string
	image: string
	club: string
}

export default function Home() {
	const fetchUsers = async () => {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`)
		const data: User[] = await res.json()
		console.log(data)
	}

	fetchUsers()
	return (
		<main>
			<Dashboard />
		</main>
	)
}
