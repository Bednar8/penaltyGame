// "use client"

import {useQuery} from "@tanstack/react-query"
import {ClubType} from "@/types/club"
import {useEffect, useState} from "react"
import {fetchClubs} from "@/src/app/api/fetch/fetchClubs"
import Club from "../ui/Club"
import {useSession} from "next-auth/react"
import {useClubsContext} from "@/src/app/context/ClubsContext"

function Clubs() {
	const {data: session} = useSession()
	const [currentClub, setCurrentClub] = useState(session?.user?.club)
	const {handleSaveClub} = useClubsContext()
	const {
		data: clubs,
		isLoading,
		error,
	} = useQuery<ClubType[], Error>({
		queryKey: ["clubs"],
		queryFn: fetchClubs,
	})

	const handleChooseClub = (id: string) => {
		setCurrentClub(id)
	}

	if (isLoading) return <p>Loading clubs...</p>
	if (error instanceof Error) return <p>Error: {error.message}</p>

	return (
		<div className="flex justify-evenly w-full">
			{clubs?.map((club) => (
				<Club
					userClub={currentClub ?? ""}
					id={club._id}
					key={club._id}
					name={club.name}
					image={club.image}
					onClick={handleChooseClub}
				/>
			))}
			<button onClick={() => handleSaveClub(currentClub)}>Zapisz klub</button>
		</div>
	)
}

export default Clubs
