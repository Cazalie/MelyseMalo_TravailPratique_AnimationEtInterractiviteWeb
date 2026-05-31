/**************************************** QuerySelector ****************************************/
const sectionListeJeux = document.querySelector(".grille");
const sectionListeCourte = document.querySelector(".courte");
const gabarit = document.querySelector("#gabaritJeu");
const boutonRecherche = document.querySelector("#btnRecherche");
const champRecherche = document.querySelector("#motCle");
const selectionAge = document.querySelector("#age");

/**************************************** Fonctions Filtres ****************************************/
function normaliser(texte) {
    return texte.trim().toLowerCase();
}

//Filtre par mot-clé
function filtrerJeux(liste, motCleSaisi) {
    const motCle = normaliser(motCleSaisi);
    if (motCle === "") {
        return liste;
    }

    return liste.filter((jeu) => {
        //Contenu du jeu
        const texteRecherche =
            jeu.titre + " " +
            jeu.publicMin + " " +
            jeu.publicMax + " " +
            jeu.description + " " +
            jeu.developpeur + " " +
            jeu.listeTagJeu.join(" ");
        //Vérification du mot-clé
        return normaliser(texteRecherche).includes(motCle);
    });
}

//Filtre par âge
function filtrerAge(liste, age) {
    if (age === "") {
        return liste;
    }
    age = Number(age);
    //Intervalle d'âge
    return liste.filter((jeu) =>
        age >= jeu.publicMin &&
        age <= jeu.publicMax
    );
}


/**************************************** Fonction AfficherJeux() ****************************************/
function afficherJeux(liste) {
    let nombreTuile = 3;
    sectionListeJeux.innerHTML = "";

    //Si la liste est vide (utile pour la recherche de jeux)
    if (liste.length === 0) {
        sectionListeJeux.classList.add("erreur");
    }
    else {
        sectionListeJeux.classList.remove("erreur");
    }

    //Tous les jeux de la liste
    for (const jeu of liste) {
        const articleJeu = gabarit.content.cloneNode(true);

        articleJeu.querySelector(".titreJeu").textContent = jeu.titre;
        articleJeu.querySelector(".publicJeu").textContent = jeu.publicMin + " à " + jeu.publicMax + " ans";
        articleJeu.querySelector(".descriptionJeu").textContent = jeu.description;
        articleJeu.querySelector(".developpeurJeu").textContent = "Développé par : " + jeu.developpeur;
        articleJeu.querySelector(".urlJeu").href = jeu.url;

        //Affichage de la liste des tag
        const listeTags = articleJeu.querySelector(".listeTagJeu");
        listeTags.innerHTML = "";
        for (const tag of jeu.listeTagJeu) {
            const li = document.createElement("li");
            li.classList.add("tagJeu");
            li.textContent = tag;
            listeTags.append(li);
        }

        //Recherche et affichage des vignettes
        if(jeu.vignette == null || jeu.vignette == ""){
            articleJeu.querySelector(".imageJeu").src = "ressources/images/Vignettes/VignetteIntrouvable.png";
            articleJeu.querySelector(".imageJeu").alt = "Vignette du jeu " +  jeu.titre + " introuvable";
        }
        else{
            articleJeu.querySelector(".imageJeu").src = "ressources/images/Vignettes/" + jeu.vignette;
            articleJeu.querySelector(".imageJeu").alt = jeu.titre;
        }

        //Si la tuile se trouve dans les vignettes en vedette, il faut montrer que 3 tuiles.
        if (sectionListeCourte){
            if (nombreTuile > 0){
                sectionListeJeux.append(articleJeu);
                nombreTuile--;
            }
            else{
                break;
            }
        }
        else{
            sectionListeJeux.append(articleJeu);
        }
    }
}


/**************************************** Fonction RechercherJeux() ****************************************/
function rechercherJeux() {
    let jeuxFiltres
    
    //Recherche par mots-clé
    jeuxFiltres = filtrerJeux(
        listeJeux,
        champRecherche.value
    );
    //Recherche par âge
    jeuxFiltres = filtrerAge(
        jeuxFiltres,
        selectionAge.value
    );

    afficherJeux(jeuxFiltres);
}


/**************************************** Affichage des jeux ****************************************/
if (sectionListeJeux) {
    afficherJeux(listeJeux);
}

if (boutonRecherche){
    boutonRecherche.addEventListener("click", rechercherJeux);
}