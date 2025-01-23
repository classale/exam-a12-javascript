function isString(myString) {
    return typeof(myString) == "string";
}

console.log(isString("Marc")); // Résultat attendu : true
console.log(isString(2)); // Résultat attendu : false