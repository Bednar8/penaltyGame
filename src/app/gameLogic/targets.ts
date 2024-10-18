export function generateTargets() {
	const targets = Math.floor(6 * Math.random())
	console.log(targets, "targets")
	return targets
}

export const currentTargets = generateTargets()
