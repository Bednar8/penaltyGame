"use client"

import {useSession} from "next-auth/react"
import Target from "@/src/components/game/Target"
import {useEffect, useState} from "react"
// import {useClubContext} from "../../context/ClubContext"
import {usePlayerContext} from "../../context/PlayersContext"
import Image from "next/image"
// import Phaser from "phaser"
// import shoot from "../../gameLogic/shoot"

// class Example extends Phaser.Scene {
// 	preload() {
// 		this.load.setBaseURL("https://cdn.phaserfiles.com/v385")

// 		this.load.image("sky", "assets/skies/space3.png")
// 		this.load.image("logo", "assets/sprites/phaser3-logo.png")
// 		this.load.image("red", "assets/particles/red.png")
// 	}

// 	create() {
// 		this.add.image(400, 300, "sky")

// 		const particles = this.add.particles(0, 0, "red", {
// 			speed: 100,
// 			scale: {start: 1, end: 0},
// 			blendMode: "ADD",
// 		})

// 		const logo = this.physics.add.image(400, 100, "logo")

// 		logo.setVelocity(100, 200)
// 		logo.setBounce(1, 1)
// 		logo.setCollideWorldBounds(true)

// 		particles.startFollow(logo)
// 	}
// }

// const config = {
// 	type: Phaser.AUTO,
// 	width: 800,
// 	height: 600,
// 	scene: Example,
// 	physics: {
// 		default: "arcade",
// 		arcade: {
// 			gravity: {y: 200},
// 		},
// 	},
// }

// const game = new Phaser.Game(config)

export default function GamePage() {
	// const {currentClub} = useClubContext()
	const {currentPlayer} = usePlayerContext()
	const [numOfTargets, setNumOfTargets] = useState(6)
	const [lives, setLives] = useState(3)
	const [record, setRecord] = useState(0)
	const [bestRecord, setBestRecord] = useState(0)

	function handleBestRecord() {
		if (record > bestRecord) {
			setBestRecord(record)
		}
	}

	function generateComputerSave() {
		const computerSave = Math.floor(numOfTargets * Math.random())
		console.log(computerSave, "compoter")
		return computerSave
	}
	function generateUserShoot(user: number | undefined) {
		console.log(user, "user")
		return user
	}

	function handleShoot(user: number | undefined) {
		const userShoot = generateUserShoot(user)
		const computerShoot = generateComputerSave()
		handleBestRecord()
		if (userShoot === computerShoot) {
			setNumOfTargets((prev) => prev + 1)
			setLives((prev) => prev - 1)
			console.log("save")
		} else {
			setNumOfTargets((prev) => (prev > 2 ? prev - 1 : prev))
			setRecord((prev) => prev + 1)
			console.log("Nice shoot")
		}
	}

	useEffect(() => {
		if (lives === 0) {
			setRecord(0)
			setLives(3)
			setNumOfTargets(6)
			alert(`End of game, your record is: ${record}`)
		}
	}, [lives, record])

	// function handleShoot(user: number | undefined) {
	// 	generateComputerSave()
	// 	// generateUserShoot(user)
	// 	console.log(userShoot, "usershoot")
	// 	console.log(computer, "compuer save")
	// 	// console.log(computer, userShoot)
	// 	// // shoot(userShoot, computer)
	// 	// const targets = Math.floor(6 * Math.random() + 1)
	// 	// setNumOfTargets(targets)
	// 	// return targets
	// }
	const {data: session} = useSession()

	const targetsArr = Array.from({length: numOfTargets}, (_, i) => i)
	const livesArr = Array.from({length: lives}, (_, i) => i)

	if (!session) {
		return <p>Proszę się zalogować, aby zagrać.</p>
	}

	return (
		<div className="flex flex-col h-full justify-center items-center">
			<div>
				<Image
					src={currentPlayer?.image}
					alt=""
					height={80}
					width={80} // Możemy pominąć szerokość, stylując ją przez CSS
				/>
			</div>
			<p>Twój najlepszy wynik: {bestRecord}</p>
			<h1 className="text-2xl text-center">
				Pokaż na co Cię stać ale nie jeden raz
			</h1>
			<p>{record}</p>
			<div className="grid grid-cols-3 grid-rows-3">
				{targetsArr.map((el, i: number) => (
					<Target key={i} number={i} onClick={handleShoot} />
				))}
			</div>
			<div className="flex">
				{livesArr.map((_, i) => (
					<div key={i}>❤️</div>
				))}
			</div>
			{/* <canvas className="w-full max-w-[1000px] h-auto bg-slate-50 rounded-lg"></canvas> */}
		</div>
	)
}
