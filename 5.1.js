
function askTvSerie(){


    let tvSerie = {
        // cle : valeur 
        Title : prompt('Quel est votre film préféré ?'),
        addActors : [],
        Years : parseFloat(prompt('Donne moi son année de production'))
    }

    let acteurs = prompt('Quels sont les acteurs');
    while ( acteurs != ''){

        tvSerie.addActors.push(acteurs);

        acteurs  = prompt('Quels sont les acteurs');
    }
    return tvSerie;

}

console.log(askTvSerie());





















