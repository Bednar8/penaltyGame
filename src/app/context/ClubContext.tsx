"use client"

// import {useSession} from "next-auth/react"
import {createContext, useState, ReactNode, useContext, useEffect} from "react"
import {fetchClubs} from "../api/fetch/fetchClubs"
import {useSession} from "next-auth/react"
import {useClubsContext} from "./ClubsContext"

// Typy dla kontekstu
interface ClubContextType {
	currentClub: ClubType | undefined
	currentClubId: string | undefined
	handleChooseClub: (id: string) => void
}

interface ClubType {
	_id: string // Typ dla _id
	name: string
	image: string
	players: object[]
}

// Domyślne wartości kontekstu
const ClubContext = createContext<ClubContextType | undefined>(undefined)

export const ClubProvider = ({children}: {children: ReactNode}) => {
	const {data: session} = useSession()
	const {clubId} = useClubsContext()
	const [currentClub, setCurrentClub] = useState<ClubType>()
	const [currentClubId, setCurrentClubId] = useState<string>()
	const body = document.querySelector("body") as HTMLBodyElement

	const setBgByClub = (clubName: string) => {
		switch (clubName) {
			case "Manchester United":
				body.style.backgroundImage = "url(/img/background.jpg)"
				break
			case "FC Barcelona":
				body.style.backgroundImage = "url(/img/background-barcelona.jpg)"
				break
			case "Bayern Munich":
				body.style.backgroundImage = "url(/img/background-madrid.jpg)"
				break
			default:
				body.style.backgroundImage = "url(/img/background.jpg)"
		}
	}

	const fetchCurrentClub = async () => {
		try {
			const clubs = await fetchClubs()

			const curClub = clubId
				? clubs.filter((curClub) => curClub._id === clubId)
				: clubs.filter((club) => club._id === session?.user?.club)

			setBgByClub(curClub[0].name)
			setCurrentClub(curClub[0])
			setCurrentClubId(curClub[0]._id)
		} catch (error) {
			console.log(error)
			alert("Błąd podczas zapisywania klubu.")
		}
	}

	useEffect(() => {
		// Uruchom fetchCurrentClub, jeśli jest dostępna sesja lub klub
		if (session || clubId) {
			fetchCurrentClub()
		}
	}, [session, clubId])

	const handleChooseClub = (id: string) => {
		setCurrentClubId(id)
	}

	return (
		<ClubContext.Provider
			value={{currentClub, handleChooseClub, currentClubId}}>
			{children}
		</ClubContext.Provider>
	)
}

// Customowy hook do korzystania z kontekstu
export const useClubContext = () => {
	const context = useContext(ClubContext)
	if (context === undefined) {
		throw new Error("useAppContext must be used within an AppProvider")
	}
	return context
}
