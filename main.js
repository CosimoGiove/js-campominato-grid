"use strict"

/*# campo minato
## esecuzione scritta
attravero un imput mi creo un bottone e attraverso un evento click mi deve generare la mappa di campo minato.
attraverso una funzione mi creo la mappa del gioco che deve essere 10 per 10.
mi creo all'interno della mia funzione un elemento div, e lo appendo al mio file html.
mi creo un elemento numero lo appendo al mio div
attraverso un ciclo for gli assegno gli elmenti della funzione.*/

const btn = document.querySelector(".btn")
console.log(btn);


btn.addEventListener("click", function () {
    console.log("ciao")
    const  NewGriglia = creazioneelemento("div","cella","containergioco")
    console.log(NewGriglia)

})

function creazioneelemento(griglia,classname,contenuto) {
    const elemento = document.createElement(griglia);
    elemento


    return elemento
}




