function premiereLettreMajuscule(chaine) {
	let words = chaine.split(" ");
	for (let i = 0; i < words.length; i++) {
		let letters = words[i].split("");
		if (letters.length == 0) continue;
		letters[0] = letters[0].toUpperCase();
		words[i] = letters.join("");
	}
	return words.join(" ");
}
console.log(premiereLettreMajuscule("bonjour tout le monde")); // Résultat attendu : "Bonjour Tout Le Monde"
