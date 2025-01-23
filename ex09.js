function compterMots(chaine) {
	return chaine.replaceAll(" ", "").length == 0 ? 0 : chaine.split(" ").filter(e => e.length > 0).length;
}

console.log(compterMots("Bonjour tout le monde")); // Résultat attendu : 4