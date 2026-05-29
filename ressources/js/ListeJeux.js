const sectionListeJeux = document.querySelector(".grille");


const listeJeux = [
    {
        titre: "Bobato",
        publicMin: 2,
        publicMax: 5,
        description: "Conçoie et personnalise ton bateau afin qui puisse prendre vie!",
        developpeur: "Philippe Fauchon",
        listeTagJeu: ["Créativité", "Coloriage", "Bateaux"],
        url: "https://h26-2j2.github.io/Fauchon_Philippe_TP1_V2/",
        vignette: "fauchon-philippe-vignette.webp"
    },

    {
        titre: "Colorami",
        publicMin: 2,
        publicMax: 5,
        description: "Trie les formes dans leurs bacs de rangement.",
        developpeur: "Étienne Minville",
        listeTagJeu: ["Formes", "Couleurs", "Rangement"],
        url: "https://h26-2j2.github.io/Minville_Etienne_Colorami/",
        vignette: "Colorami.png"
    },

    {
        titre: "La Chasse aux Pommes",
        publicMin: 2,
        publicMax: 5,
        description: "Trouve, cueille et lave les pommes du verger.",
        developpeur: "Nathaniel Ouellet",
        listeTagJeu: ["Découverte", "Coloré", "Motricité"],
        url: "https://h26-2j2.github.io/OuelletNathaniel-TravailPratique/",
        vignette: "ouellet-nathaniel-vignette.webp"
    },

    {
        titre: "Trouve les animaux",
        publicMin: 2,
        publicMax: 5,
        description: "Découvre les animaux de la maison!",
        developpeur: "Jamila Vargas",
        listeTagJeu: ["Sons", "Interactif", "Animaux"],
        url: "https://h26-2j2.github.io/Vargas_jamila-TP-Trouve-l-animaux/",
        vignette: "vargas-jamila-vignette.jpg"
    },

    {
        titre: "Le Fort de Thomas",
        publicMin: 4,
        publicMax: 5,
        description: "Aide Thomas à construire la maison de ses amis avec les outils de construction.",
        developpeur: "Jaider Contreras",
        listeTagJeu: ["Formes", "Créativité", "Puzzle"],
        url: "https://h26-2j2.github.io/ContrerasJaider_LeFortDeThomas/",
        vignette: "contreras-jaider-vignette.png"
    },

    {
        titre: "Le Repas de Ludo l'Alligator",
        publicMin: 4,
        publicMax: 6,
        description: "Prépare le sandwich de Ludo!",
        developpeur: "André Armendariz-Jasso",
        listeTagJeu: ["Assemblage", "Cuisine", "Reconnaissance"],
        url: "https://h26-2j2.github.io/ARMENDARIZ-JASSO_ANDRE_TravailPratique/",
        vignette: "LeRepasDeLudo.png"
    },

    {
        titre: "Billy & Mini",
        publicMin: 6,
        publicMax: 8,
        description: "Billy & Mini est un jeu éducatif de logique, qui explore les thèmes de l'entraide et de l'amitié dans un ambiance ludique et amusante",
        developpeur: "Cedryck Paquette",
        listeTagJeu: ["Entraide", "Logique", "Animaux"],
        url: "https://h26-2j2.github.io/Paquette_Cedryck_TravailPratique/",
        vignette: "paquette-cedryck-vignette.jpg"
    },

    {
        titre: "La saveur des fruits",
        publicMin: 6,
        publicMax: 8,
        description: "La saveur des fruits est un jeu éducatif et de détente.",
        developpeur: "Cindy Phan",
        listeTagJeu: ["Détente", "Simulation", "Logique"],
        url: "https://h26-2j2.github.io/PHAN_CINDY_TravailPratique/",
        vignette: "phan-cindy-xuan-yen-vignette.webp"
    },

    {
        titre: "Les Mathématiciens",
        publicMin: 6,
        publicMax: 8,
        description: "Résous des mini opérations mathématiques.",
        developpeur: "Angela Feng",
        listeTagJeu: ["Puzzle", "Mathématique", "Logique"],
        url: "https://h26-2j2.github.io/Feng_Angela_TravailPratique/",
        vignette: "feng-angela-vignette.webp"
    },

    {
        titre: "Nettoyer sa chambre",
        publicMin: 6,
        publicMax: 8,
        description: "Aide tes parents à ramasser tes jouets dans ta chambre.",
        developpeur: "Marc-Alexandre Di Marco François",
        listeTagJeu: ["Motricité", "Propreté", "Puzzle"],
        url: "https://h26-2j2.github.io/DiMarcoFrancois_Marc-Alexandre_TravailPratique/",
        vignette: "dimarco-francois-marc-alexandre-vignette.webp"
    },
];

if (sectionListeJeux){
    const gabarit = document.querySelector("#gabaritJeu");
    for (const jeu of listeJeux) {
        const articleJeu = gabarit.cloneNode(true).content;
        
        articleJeu.querySelector(".titreJeu").textContent = jeu.titre;
        articleJeu.querySelector(".publicJeu").textContent = jeu.publicMin + " à " + jeu.publicMax + "ans";
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
        articleJeu.querySelector(".imageJeu").src = "ressources/images/Vignettes/" + jeu.vignette;
        articleJeu.querySelector(".imageJeu").alt = jeu.titre;

        // Injecter cet article dans la section des jeus
        sectionListeJeux.append(articleJeu);
    }
}
