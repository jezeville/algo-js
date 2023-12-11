let n = prompt('Combien de chiffres');
let sum = 0;

for (let i = 0; i < n; i++) {
    let currentNumber = prompt('Donne-moi un chiffre');
    sum += parseFloat(currentNumber);
    console.log(sum);
}

console.log("La somme totale est : " + sum);