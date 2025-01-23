function compterMots(chaine) {
	return chaine.replaceAll(" ", "").length == 0 ? 0 : chaine.split(" ").length;
}

console.log(compterMots("Bonjour tout le monde")); // Résultat attendu : 4