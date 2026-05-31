
const sectionListeJeux = document.querySelector(".grille");
const sectionListeCourte = document.querySelector(".courte");
let nombreTuile = 3;

if (sectionListeJeux){
    const gabarit = document.querySelector("#gabaritJeu");
    for (const jeu of listeJeux) {
        const articleJeu = gabarit.cloneNode(true).content;
        
        articleJeu.querySelector(".titreJeu").textContent = jeu.titre;
        articleJeu.querySelector(".publicJeu").textContent = jeu.publicMin + " à " + jeu.publicMax + " ans";
        articleJeu.querySelector(".descriptionJeu").textContent = jeu.description;
        articleJeu.querySelector(".developpeurJeu").textContent = "Développé par : " + jeu.developpeur;
        
        const listeTags = articleJeu.querySelector(".listeTagJeu");
        listeTags.innerHTML = "";
        for (const tag of jeu.listeTagJeu) {
            const li = document.createElement("li");
            li.classList.add("tagJeu");
            li.textContent = tag;
            listeTags.append(li);
        }

        articleJeu.querySelector(".urlJeu").href = jeu.url;
        if(jeu.vignette == null || jeu.vignette == ""){
            articleJeu.querySelector(".imageJeu").src = "ressources/images/Vignettes/VignetteIntrouvable.png";
        }
        else{
            articleJeu.querySelector(".imageJeu").src = "ressources/images/Vignettes/" + jeu.vignette;
        }
        
        articleJeu.querySelector(".imageJeu").alt = jeu.titre;

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
