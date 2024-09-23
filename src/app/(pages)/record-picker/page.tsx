"use client"

import {useEffect, useState} from "react"
import {signOut, useSession} from "next-auth/react"

export default function RecordPicker() {
	const {data: session} = useSession()
	const [record, setRecord] = useState(0) // Domyślny kolor

	useEffect(() => {
		// Sprawdź, czy sesja zawiera kolor i ustaw go w stanie
		if (session?.user?.record) {
			setRecord(session.user.record) // Ustaw kolor z sesji
		}
	}, [session])

	const handleSaveclub = async () => {
		const response = await fetch("/api/users/record", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({record}),
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
				type="number"
				value={record}
				onChange={(e) => setRecord(Number(e.target.value))}
			/>
			<button onClick={handleSaveclub}>Zapisz kolor</button>
			<button onClick={() => signOut({callbackUrl: "/"})}>Sign out</button>
		</div>
	)
}
