import {currentTargets, generateTargets} from "./targets"

function shoot(number: number) {
	const userShoot = number
	const computerSave = currentTargets
	console.log(userShoot, "user")
	console.log(computerSave, "computer")

	if (userShoot === computerSave) {
		alert("You lose...")
	} else {
		alert("Nice shoot!")
	}

	generateTargets()
}

export default shoot
