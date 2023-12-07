let array1 = [1,2,3,4,5];
let array2 = [];
for (let elem of array1){
    array2.push(elem);
}
console.log(array2);


let array3 = [1,2,3,4,5];
let array4 = [];
let tableaucopie = array3.concat(array4);
console.log(tableaucopie);