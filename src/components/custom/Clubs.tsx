// "use client"

import {useQuery} from "@tanstack/react-query"
import {ClubType} from "@/types/club"
// import {useEffect, useState} from "react"
import {fetchClubs} from "@/src/app/api/fetch/fetchClubs"
import Club from "../ui/Club"
// import {useSession} from "next-auth/react"
import {useClubsContext} from "@/src/app/context/ClubsContext"
// import Link from "next/link"
import {useClubContext} from "@/src/app/context/ClubContext"
import Button from "../ui/Button"
import Spinner from "../ui/Spinner"

function Clubs() {
	// const {data: session} = useSession()
	// const [currentClub, setCurrentClub] = useState(session?.user?.club)
	const {handleChooseClub, currentClubId} = useClubContext()
	const {handleSaveClub} = useClubsContext()
	const {
		data: clubs,
		isLoading,
		error,
	} = useQuery<ClubType[], Error>({
		queryKey: ["clubs"],
		queryFn: fetchClubs,
	})

	if (isLoading) return <Spinner />
	if (error instanceof Error) return <p>Error: {error.message}</p>

	return (
		<div className="flex flex-col h-full justify-between">
			<div className="flex flex-wrap items-center justify-evenly">
				{clubs?.map((club) => (
					<Club
						id={club._id}
						key={club._id}
						name={club.name}
						image={club.image}
						onClick={handleChooseClub}
					/>
				))}
			</div>
			<div className="text-center">
				<Button
					type="primary"
					onClick={() => {
						handleSaveClub(currentClubId)
					}}>
					Zapisz klub
				</Button>
			</div>
			{/* {clubId || currentClub ? (
				<Link href="/players">Wybierz piłkarza</Link>
			) : (
				<span className="text-gray-400 cursor-not-allowed">
					Wybierz piłkarza
				</span>
			)} */}
		</div>
	)
}

export default Clubs
