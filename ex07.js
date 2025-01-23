function moyenne(tab) {
	if(tab.length == 0) return 0;
    let out = 0;
    for(let value of tab) out += value;
    out /= tab.length;
    return out;
}

console.log(moyenne([4, 6, 8])); // Résultat attendu : 6