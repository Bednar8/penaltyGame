// "use client"

import {useQuery} from "@tanstack/react-query"
import {ClubType} from "@/types/club"
import {useEffect, useState} from "react"
import {fetchClubs} from "@/src/app/api/fetch/fetchClubs"
import Club from "../ui/Club"
import {useSession} from "next-auth/react"
import {useClubsContext} from "@/src/app/context/ClubsContext"
import Link from "next/link"
import {useClubContext} from "@/src/app/context/ClubContext"

function Clubs() {
	const {data: session} = useSession()
	// const [currentClub, setCurrentClub] = useState(session?.user?.club)
	const {currentClub, handleChooseClub, currentClubId} = useClubContext()
	const {clubId, handleSaveClub} = useClubsContext()
	const {
		data: clubs,
		isLoading,
		error,
	} = useQuery<ClubType[], Error>({
		queryKey: ["clubs"],
		queryFn: fetchClubs,
	})

	if (isLoading) return <p>Loading clubs...</p>
	if (error instanceof Error) return <p>Error: {error.message}</p>

	return (
		<div className="flex justify-evenly w-full">
			{clubs?.map((club) => (
				<Club
					id={club._id}
					key={club._id}
					name={club.name}
					image={club.image}
					onClick={handleChooseClub}
				/>
			))}
			<button onClick={() => handleSaveClub(currentClubId)}>Zapisz klub</button>
			{clubId || currentClub ? (
				<Link href="/players" aria-disabled="true">
					Wybierz piłkarza
				</Link>
			) : (
				<span className="text-gray-400 cursor-not-allowed">
					Wybierz piłkarza
				</span>
			)}
		</div>
	)
}

export default Clubs
