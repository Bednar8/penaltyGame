"use client"

import {useSession} from "next-auth/react"
import {currentTargets} from "../../gameLogic/targets"
import Target from "@/src/components/game/Target"
import {useEffect, useState} from "react"

export default function GamePage() {
	const targetsNum = currentTargets
	const {data: session} = useSession()
	const [targets, setTargets] = useState(targetsNum)

	console.log(targetsNum, "targetsNum")

	useEffect(() => {
		setTargets(targetsNum)
	}, [targetsNum])

	const targetsArr = Array.from({length: targets}, (_, i) => i)

	console.log(targetsNum, "targetsNum")

	if (!session) {
		return <p>Proszę się zalogować, aby zagrać.</p>
	}

	return (
		<div className="flex flex-col h-full justify-center items-center">
			<h1 className="text-2xl text-center">
				Pokaż na co Cię stać ale nie jeden raz
			</h1>
			<div className="grid grid-cols-3 grid-rows-3">
				{targetsArr.map((el, i: number) => (
					<Target key={i} number={i} />
				))}
			</div>
			{/* <canvas className="w-full max-w-[1000px] h-auto bg-slate-50 rounded-lg"></canvas> */}
		</div>
	)
}
