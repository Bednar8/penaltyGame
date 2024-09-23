"use client"

// import {useSession} from "next-auth/react"
import {createContext, useState, ReactNode, useContext} from "react"

// Typy dla kontekstu
interface ClubContextType {
	club: string | undefined
	handleSaveClub: (club: string) => void
}

// Domyślne wartości kontekstu
const ClubsContext = createContext<ClubContextType | undefined>(undefined)

export const ClubsProvider = ({children}: {children: ReactNode}) => {
	const [club, setClub] = useState<string | undefined>()

	const handleSaveClub = async (club: string) => {
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/users/club`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({club: club}),
				}
			)

			if (res.ok) {
				alert("Klub został zapisany!")
			}
		} catch (error) {
			console.log(error)
			alert("Błąd podczas zapisywania klubu.")
		}
	}

	return (
		<ClubsContext.Provider value={{handleSaveClub, club}}>
			{children}
		</ClubsContext.Provider>
	)
}

// Customowy hook do korzystania z kontekstu
export const useClubsContext = () => {
	const context = useContext(ClubsContext)
	if (context === undefined) {
		throw new Error("useAppContext must be used within an AppProvider")
	}
	return context
}
