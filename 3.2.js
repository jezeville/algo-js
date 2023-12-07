let array = [1,2,3,4,5];
let number = 0 ;
for (let elem of array){
    number = elem + number;
}
let moyenne = number / array.length;
console.log(moyenne);