let array = [0,1,2,3,7,6,3,1,9,10,4];
let max = 0;
let min = 0;
for (let elem of array){
    if (max < elem){
        max = elem;
    }
    if (min > elem){
        min == elem;
    }
}
console.log(min , max);