function filtrerNegatifs(tab) {
	return tab.filter((e) => e >= 0);
}

console.log(filtrerNegatifs([-3, 4, -1, 6])); // Résultat attendu : [4, 6]
