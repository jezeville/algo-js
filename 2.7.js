let n = prompt('Combien de chiffre');
let number = 0;
for (i = 0; i < n ; i++){
    number = prompt('donne moi un chiffre');
    number = parseFloat(number) + parseFloat(number);
}
console.log(number);
