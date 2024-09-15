"use client"

import {useEffect, useState} from "react"
import {signOut, useSession} from "next-auth/react"

interface Player {
	name: string
	club: string
}

export default function PlayerPicker() {
	const {data: session} = useSession()
	const [player, setPlayer] = useState<Player>({
		name: "Ronaldinho",
		club: "FC Barcelona",
	}) // Domyślny kolor

	const fetchPlayers = async () => {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/players`)
		const data: Player[] = await res.json()
		console.log(data)
	}
	fetchPlayers()
	useEffect(() => {
		// Sprawdź, czy sesja zawiera kolor i ustaw go w stanie
		if (session?.user?.player) {
			const sessionPlayer = session.user.player as Player
			setPlayer(sessionPlayer) // Ustaw kolor z sesji
		}
	}, [session])

	const changePlayerName = (newName: string) => {
		setPlayer((player) => ({...player, name: newName}))
	}

	const handleSaveclub = async () => {
		const response = await fetch("/api/users/player", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({player}),
		})

		if (response.ok) {
			alert("Kolor został zapisany!")
		} else {
			alert("Błąd podczas zapisywania koloru.")
		}
	}

	if (!session) {
		return <p>Proszę się zalogować, aby zmienić kolor.</p>
	}

	return (
		<div>
			{JSON.stringify(session)}
			<h2>Wybierz kolor</h2>
			<input
				type="text"
				value={player.name}
				onChange={(e) => changePlayerName(e.target.value)}
			/>
			<button onClick={handleSaveclub}>Zapisz kolor</button>
			<button onClick={() => signOut({callbackUrl: "/"})}>Sign out</button>
		</div>
	)
}
