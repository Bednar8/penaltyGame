"use client"

import {useEffect, useState} from "react"
import {signOut, useSession} from "next-auth/react"

export default function ClubPicker() {
	const {data: session} = useSession()
	const [club, setClub] = useState("barcelona") // Domyślny kolor

	useEffect(() => {
		// Sprawdź, czy sesja zawiera kolor i ustaw go w stanie
		if (session?.user?.club) {
			setClub(session.user.club) // Ustaw kolor z sesji
		}
	}, [session])

	const handleSaveclub = async () => {
		const response = await fetch("/api/users/club", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({club}),
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
				type="club"
				value={club}
				onChange={(e) => setClub(e.target.value)}
			/>
			<button onClick={handleSaveclub}>Zapisz kolor</button>
			<button onClick={() => signOut({callbackUrl: "/"})}>Sign out</button>
		</div>
	)
}
