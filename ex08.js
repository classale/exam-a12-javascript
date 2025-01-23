function sommePairs(tab) {
    let out = 0;
    for(let value of tab.filter(e => e%2==0)) out += value;
    return out;
}

console.log(sommePairs([1, 2, 3, 4])); // Résultat attendu : 6