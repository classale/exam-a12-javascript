function compterVoyelles(chaine) {
	let out = 0;
	for (let letter of chaine) out += /(a|e|i|o|u|y)/.test(letter.toLowerCase());
	return out;
}

console.log(compterVoyelles("bonjour")); // Résultat attendu : 3