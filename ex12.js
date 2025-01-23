function estPalindromeAvance(chaine) {
	return (
		chaine.replaceAll(" ", "") ==
		chaine.replaceAll(" ", "").split("").reverse().join("")
	);
}

console.log(estPalindromeAvance("a man a plan a canal panama")); // Résultat attendu : true
