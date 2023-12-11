let pickLearner = (inputAr, n) =>{
    let tab2 = [];
    for (i = 0; i<n; i++){
        let hasard =  Math.floor(Math.random()*((tab.length)-0)+0);
        tab2.push(inputAr[hasard]);
    }
    console.log(tab2);
}

let tab = ["Alice", "Jerem","Alexis","Julien","Cassidy","Hanen","Winona"];
let n = Math.floor(Math.random()*((tab.length)-0)+0);


pickLearner(tab,n);