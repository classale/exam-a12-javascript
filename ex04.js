function dansPlage(nombre, min, max) {
	return nombre >= min && nombre <= max;
}

console.log(dansPlage(5, 1, 10)); // Résultat attendu : true
console.log(dansPlage(15, 1, 10)); // Résultat attendu : false
