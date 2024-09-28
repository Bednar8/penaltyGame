"use client"

// import {useSession} from "next-auth/react"
import {createContext, useState, ReactNode, useContext, useEffect} from "react"
import {fetchClubs} from "../api/fetch/fetchClubs"
import {useSession} from "next-auth/react"
import {useClubsContext} from "./ClubsContext"
import {fetchPlayers} from "../api/fetch/fetchPlayers"

// Typy dla kontekstu
interface PlayerContextType {
	currentPlayer: PlayerType | undefined
	currentPlayerId: string | undefined
	handleChoosePlayer: (id: string) => void
}

interface PlayerType {
	_id: string // Typ dla _id
	name: string
	image: string
}

// Domyślne wartości kontekstu
const PlayerContext = createContext<PlayerContextType | undefined>(undefined)

export const PlayerProvider = ({children}: {children: ReactNode}) => {
	const {data: session} = useSession()
	// const {playerId} = useClubsContext()
	const [currentPlayer, setCurrentPlayer] = useState<PlayerType>()
	const [currentPlayerId, setCurrentPlayerId] = useState<string>()

	const handleSavePlayer = async (playerId: string) => {
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/users/player`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({player: playerId}),
				}
			)

			if (res.ok) {
				alert("Piłkarz został zapisany!")
				// setCurrentPlayer()
				setCurrentPlayerId(playerId)
			}
		} catch (error) {
			console.log(error)
			alert("Błąd podczas zapisywania klubu.")
		}
	}

	const fetchCurrentPlayer = async () => {
		try {
			const players = await fetchPlayers()

			const curPlayer = currentPlayerId
				? players.filter((curPlayer) => curPlayer._id === currentPlayerId)
				: players.filter((club) => club._id === session?.user?.player)

			console.log(curPlayer[0])
			setCurrentPlayer(curPlayer[0])
			setCurrentPlayerId(curPlayer[0]._id)
		} catch (error) {
			console.log(error)
			// alert("Błąd podczas zapisywania klubu.")
		}
	}

	useEffect(() => {
		// Uruchom fetchCurrentClub, jeśli jest dostępna sesja lub klub
		if (session || currentPlayerId) {
			fetchCurrentPlayer()
		}
	}, [session, currentPlayerId])

	// useEffect(() => {
	// 	// Uruchom fetchCurrentClub, jeśli jest dostępna sesja lub klub
	// 	if (session || clubId) {
	// 		fetchCurrentClub()
	// 	}
	// }, [session, clubId])

	const handleChoosePlayer = (id: string) => {
		console.log(id)
		setCurrentPlayerId(id)
	}

	return (
		<PlayerContext.Provider
			value={{
				currentPlayer,
				handleChoosePlayer,
				currentPlayerId,
				handleSavePlayer,
			}}>
			{children}
		</PlayerContext.Provider>
	)
}

// Customowy hook do korzystania z kontekstu
export const usePlayerContext = () => {
	const context = useContext(PlayerContext)
	if (context === undefined) {
		throw new Error("useAppContext must be used within an AppProvider")
	}
	return context
}
