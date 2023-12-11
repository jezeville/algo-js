function askTvSerie() {
    let tvSerie = {
        'Nom': prompt('Donne moi le nom de la série'),
        'Année': prompt('Donne moi son année de production'),
        'Acteurs': []
    };

    let acteur = prompt('Donne un acteur');

    while (acteur !== '') {
        tvSerie.Acteurs.push(acteur);
        acteur = prompt('Donne moi un acteur (tapez 0 pour arrêter)');
    }

    return tvSerie;
}


function randomizeCast(tvSerie) {

    for (let i = tvSerie.Acteurs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        
        [tvSerie.Acteurs[i], tvSerie.Acteurs[j]] = [tvSerie.Acteurs[j], tvSerie.Acteurs[i]];
    }

    console.log(tvSerie.Acteurs);
}

let tvSerie = askTvSerie();
randomizeCast(tvSerie);