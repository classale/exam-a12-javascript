function greetings(isStudent) {
	return `Bienvenue cher ${isStudent ? "élève" : "parent"}`;
}

console.log(greetings(true)); // Résultat attendu : "Bienvenue cher élève"
console.log(greetings(false)); // Résultat attendu : "Bienvenue cher parent"
