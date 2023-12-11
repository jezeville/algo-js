let rand10 = () => {
    let number = Math.floor(Math.random()*(10-1)+1)
    return (number);
}
let multiRand = (n) => {
    let tabl = [];
    for (i = 0; i < n; i++){
        tabl.push(rand10());
    }
    console.log(tabl);
}
let nbr = prompt('Combien de colonne');
multiRand(nbr);