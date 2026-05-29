const navToggle = document.querySelector('#nav-toggle');
const fleche = document.querySelector("#fleche");
const contenuPrincipal = document.querySelectorAll('.contenu-principal');
const liensMenu = document.querySelectorAll('.nav-principale a');

navToggle.addEventListener("change", synchroniserEtatMenu)

function synchroniserEtatMenu() {
    if(navToggle.checked) {
        document.body.classList.add("defilementInnactif");
        fleche.classList.add("cache");
    }
    else {
        document.body.classList.remove("defilementInnactif");
        fleche.classList.remove("cache");
    }

    contenuPrincipal.style.pointerEvents = navToggle.checked ? "none" : "";
}

for (const lien of liensMenu) {
    lien.addEventListener("click", gererClicLien);
}

function gererClicLien() {
    navToggle.checked = false;
    synchroniserEtatMenu();
}