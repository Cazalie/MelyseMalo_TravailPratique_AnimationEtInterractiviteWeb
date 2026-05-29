const accueil = document.querySelector(".accueil");
const site = document.querySelector(".site");
const titre = document.querySelector(".titre-dactylo");

//J'ai rajouté cette condition, car la page avait de la misère à loader une deuxième fois
//Si on détecte que l'animation d'accueil a déjà été jouée, on ne fait qu'afficher le site
if (sessionStorage.getItem("animationJoue")) {
    site.classList.remove("cache");
    site.classList.add("est-active");
    accueil.classList.add("cache");
} 

//Sinon, on joue l'animation et met que l'animation a déjà été jouer
else {
    titre.addEventListener("animationend", (evt) => {
        if (evt.animationName === "curseur-clignotant") {
            site.classList.remove("cache");
            site.classList.add("est-active");
            accueil.classList.add("cache");
            sessionStorage.setItem("animationJoue", "true");
        }
    });
}

/*Référence :
https://developer.mozilla.org/fr/docs/Web/API/Window/sessionStorage
https://www.w3schools.com/jsref/prop_win_sessionstorage.asp */