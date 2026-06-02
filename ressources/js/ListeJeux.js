//Liste générée avec l'intelligence artificielle Use.Ai
//Après le tableau déjà pré-remplis (voir le Création du Projet)
//https://www.use.ai

const listeJeux = [
{
    titre: "Billy & Mini",
    publicMin: 6,
    publicMax: 8,
    description: "Billy & Mini est un jeu éducatif de logique explorant les thèmes de l'entraide et de l'amitié.",
    developpeur: "Cedryck Paquette",
    listeTagJeu: ["Entraide", "Logique", "Animaux"],
    url: "https://h26-2j2.github.io/Paquette_Cedryck_TravailPratique/",
    vignette: "paquette-cedryck-vignette.jpg"
},
{
    titre: "Bloc et sable",
    publicMin: 6,
    publicMax: 8,
    description: "Un jeu calme portant sur des blocs de construction où la seule limite est la créativité",
    developpeur: "Cédric Leclerc",
    listeTagJeu: ["Bloc", "Créativité", "Relaxant"],
    url: "https://h26-2j2.github.io/Leclerc_Cedric_TP/",
    vignette: "leclerc-cedric-vignette.jpg"
},
{
    titre: "Bobato",
    publicMin: 2,
    publicMax: 5,
    description: "Conçoie et personnalise ton bateau afin qui puisse prendre vie!",
    developpeur: "Philippe Fauchon",
    listeTagJeu: ["Créativité", "Coloriage", "Bateaux"],
    url: "https://h26-2j2.github.io/Fauchon_Philippe_TP1_V2/",
    vignette: "fauchon-philippe-vignette.jpg"
},
{
    titre: "Boîte à gogo",
    publicMin: 4,
    publicMax: 6,
    description: "Aide le livreur à remettre les colis aux personnes",
    developpeur: "Léonie Cantegrel",
    listeTagJeu: ["Puzzle", "Éducatif", "Logique"],
    url: "https://h26-2j2.github.io/CantegrelLeonie_TravailPratique/",
    vignette: ""
},
{
    titre: "Bulles de jouets",
    publicMin: 6,
    publicMax: 8,
    description: "Vise les jouets",
    developpeur: "David Hwang",
    listeTagJeu: ["Précisions", "Jouets"],
    url: "https://h26-2j2.github.io/Hwang_David_TravailPratique/",
    vignette: ""
},
{
    titre: "Choisis ta route",
    publicMin: 2,
    publicMax: 4,
    description: "Choisis le chemin le plus court en cliquant sur le chemin qui a le moins de carré",
    developpeur: "Minh-lee Ho",
    listeTagJeu: ["Voiture", "Choix", "Chiffres"],
    url: "https://h26-2j2.github.io/Tp1-volet-2/",
    vignette: "ho-minh-lee-vignette.jpg"
},
{
    titre: "ChromaC",
    publicMin: 6,
    publicMax: 8,
    description: "Un nouveau scientifique de couleur doit étudier sur comment les couleurs se mélange.",
    developpeur: "Véronika Vong",
    listeTagJeu: ["Couleurs", "Exploration", "Science"],
    url: "https://h26-2j2.github.io/vv_TravailPratique/",
    vignette: ""
},
{
    titre: "Colorami",
    publicMin: 2,
    publicMax: 5,
    description: "Trie les formes dans leurs bacs de rangement.",
    developpeur: "Étienne Minville",
    listeTagJeu: ["Formes", "Couleurs", "Rangement"],
    url: "https://h26-2j2.github.io/Minville_Etienne_Colorami/",
    vignette: ""
},
{
    titre: "Constructor",
    publicMin: 4,
    publicMax: 7,
    description: "Traverse le monde, construit ton chemin et détruit des structures dans un univers fantastique.",
    developpeur: "Karl-Anthony Bastien-Bisson",
    listeTagJeu: ["Bac à sable", "Puzzle", "Tactique"],
    url: "https://h26-2j2.github.io/kbb_tp1/",
    vignette: ""
},
{
    titre: "Coul-mot",
    publicMin: 2,
    publicMax: 5,
    description: "Retournez les poissons à leur famille !",
    developpeur: "Imane Mechali",
    listeTagJeu: ["Correspondance", "Couleurs", "Interactif"],
    url: "https://h26-2j2.github.io/TP1_Volet3_Imane_Mechali/",
    vignette: "imane-mechali-vignette.jpg"
},
{
    titre: "Electro",
    publicMin: 6,
    publicMax: 8,
    description: "Aligner des composantes éléctriques dans des circuits éléctriques.",
    developpeur: "Jad Razouani",
    listeTagJeu: ["Électricité", "Logique", "Puzzle"],
    url: "https://h26-2j2.github.io/Razouani-Jad_TravailPratique",
    vignette: "razouani-jad-vignette.jpg"
},
{
    titre: "Ferrallibra",
    publicMin: 6,
    publicMax: 8,
    description: "Retrouver les animaux en cavale et réahabilite les à leurs habitats naturelles.",
    developpeur: "Shen Dumas",
    listeTagJeu: ["Exploration", "Animaux"],
    url: "https://h26-2j2.github.io/ShenDumas_Tp1/?classId=6a032628-eccf-4887-8bd4-5f1e3256161f&assignmentId=dee04448-ff90-4a10-9507-4d91823238df&submissionId=e88bac1d-46e4-d567-a44f-4f478f2bbeec",
    vignette: "dumas-shen-vignette.jpg"
},
{
    titre: "Insectissime! La Collection.",
    publicMin: 6,
    publicMax: 8,
    description: "Chenille apprend à compter. Fourmi s'oriente dans labyrinthe. Coccis Connect 4.",
    developpeur: "Alexandre Rémy",
    listeTagJeu: ["Insectes", "Aventure", "Interactivité Souris-Clavier"],
    url: "[ialexandrem.github.io](https://ialexandrem.github.io/2J2-Insectissime-LaCollection/",
    vignette: ""
},
{
    titre: "La Chasse aux Pommes",
    publicMin: 2,
    publicMax: 5,
    description: "Trouve, cueille et lave les pommes du verger.",
    developpeur: "Nathaniel Ouellet",
    listeTagJeu: ["Découverte", "Coloré", "Motricité"],
    url: "https://h26-2j2.github.io/OuelletNathaniel-TravailPratique/",
    vignette: "ouellet-nathaniel-vignette.jpg"
},
{
    titre: "La saveur des fruits",
    publicMin: 6,
    publicMax: 8,
    description: "La saveur des fruits est un jeu éducatif et de détente.",
    developpeur: "Cindy Phan",
    listeTagJeu: ["Détente", "Simulation", "Logique"],
    url: "https://h26-2j2.github.io/PHAN_CINDY_TravailPratique/",
    vignette: "phan-cindy-xuan-yen-vignette.jpg"
},
{
    titre: "Le Chaudron de Merlin",
    publicMin: 6,
    publicMax: 8,
    description: "Retrouvez les ingrédients manquants du chaudron de Merlin et maîtrisez la magie des multiplications !",
    developpeur: "Nicolas Gavriliouk",
    listeTagJeu: ["Mathématiques", "Logique", "Puzzle"],
    url: "https://h26-2j2.github.io/Nicolas_Gavriliouk_h26-2j2_-Le_Chaudron_de_Merlin/",
    vignette: ""
},
{
    titre: "Le Fort de Thomas",
    publicMin: 4,
    publicMax: 5,
    description: "Aide Thomas à construire la maison de ses amis avec les outils de construction.",
    developpeur: "Jaider Contreras",
    listeTagJeu: ["Puzzle", "Créativité", "Formes"],
    url: "https://h26-2j2.github.io/ContrerasJaider_LeFortDeThomas/",
    vignette: "contreras-jaider-vignette.jpg"
},
{
    titre: "Le monstre affamée",
    publicMin: 6,
    publicMax: 8,
    description: "Nourrissez le monstre pour le rendre heureux.",
    developpeur: "Arthur Vaccari Pereira",
    listeTagJeu: ["Monstre", "Amusant", "Nourriture"],
    url: "https://h26-2j2.github.io/Arthur_Vaccari_TP/",
    vignette: ""
},
{
    titre: "Le Repas de Ludo l'Alligator",
    publicMin: 4,
    publicMax: 6,
    description: "Prépare le sandwich de Ludo!",
    developpeur: "André Armendariz-Jasso",
    listeTagJeu: ["Assemblage", "Cuisine", "Reconnaissance"],
    url: "https://h26-2j2.github.io/ARMENDARIZ-JASSO_ANDRE_TravailPratique/",
    vignette: "jasso-andre-vignette.jpg"
},
{
    titre: "Les Aventures des Petits Curieux",
    publicMin: 6,
    publicMax: 8,
    description: "Développe ta mémoire et ton sens de l'observation à travers des aventures",
    developpeur: "Rose Hins",
    listeTagJeu: ["Observation", "Mémoire", "Chiffres"],
    url: "https://h26-2j2.github.io/hins_rose_TravailPratique/",
    vignette: ""
},
{
    titre: "Les Mathématiciens",
    publicMin: 6,
    publicMax: 8,
    description: "Résous des petites opérations mathématiques.",
    developpeur: "Angela Feng",
    listeTagJeu: ["Mathématique", "Puzzle", "Logique"],
    url: "https://h26-2j2.github.io/Feng_Angela_TravailPratique/",
    vignette: "feng-angela-vignette.jpg"
},
{
    titre: "L'océan des lettres",
    publicMin: 6,
    publicMax: 8,
    description: "Replace les lettres en ordre alphabétique",
    developpeur: "Marianne Lemay",
    listeTagJeu: ["Tri", "Alphabet", "Océan"],
    url: "https://h26-2j2.github.io/LEMAY_Marianne_TravailPratique/",
    vignette: ""
},
{
    titre: "Math Shinobi",
    publicMin: 6,
    publicMax: 8,
    description: "Résoudre des mini opérations mathématiques pour avancer dans le jeu et gagner des points.",
    developpeur: "Angel Gabriel Medina Almonte",
    listeTagJeu: ["Mathématique", "Logique", "Puzzle"],
    url: "https://h26-2j2.github.io/Medina-Almonte-Angel-Gabriel-tpVolet3/",
    vignette: "medina-almonte-angel-gabriel-vignette.jpg"
},
{
    titre: "Mille Marée",
    publicMin: 4,
    publicMax: 6,
    description: "Attrape les poissons pour ton aquarium.",
    developpeur: "Théo Gilbert",
    listeTagJeu: ["Tactique", "Concentration", "Gestion"],
    url: "https://h26-2j2.github.io/Theo_Gilbert_Mille_Marees/",
    vignette: ""
},
{
    titre: "Mission Drapeaux",
    publicMin: 6,
    publicMax: 8,
    description: "Un jeu de memoire portant sur quelques drapeaux du monde.",
    developpeur: "Camila Tiemi Shiozuka Rezende",
    listeTagJeu: ["Mémoire", "Drapeau", "Géographie"],
    url: "https://h26-2j2.github.io/Shiozuka_Rezende_Camila_Tieimi_TP1_Remise2",
    vignette: ""
},
{
    titre: "Nettoyer sa chambre",
    publicMin: 6,
    publicMax: 8,
    description: "Aide tes parents à ramasser tes jouets dans ta chambre.",
    developpeur: "Marc-Alexandre Di Marco François",
    listeTagJeu: ["Motricité", "Propreté", "Puzzle"],
    url: "https://h26-2j2.github.io/DiMarcoFrancois_Marc-Alexandre_TravailPratique/",
    vignette: "dimarco-francois-marc-alexandre-vignette.jpg"
},
{
    titre: "PixelMath",
    publicMin: 6,
    publicMax: 8,
    description: "Résouds des problèmes mathematiques.",
    developpeur: "Adriano Blaise",
    listeTagJeu: ["Mathématiques", "Logique", "Puzzle"],
    url: "https://h26-2j2.github.io/TP3/",
    vignette: ""
},
{
    titre: "Plomblime",
    publicMin: 6,
    publicMax: 8,
    description: "Aide un petit slime dans différentes tâches",
    developpeur: "Matheo Sousa",
    listeTagJeu: ["Puzzle", "Logique"],
    url: "https://h26-2j2.github.io/MatheoSousa_volet2/",
    vignette: ""
},
{
    titre: "Quipro-Quoi?",
    publicMin: 6,
    publicMax: 8,
    description: "Trouve les éléments qui ne correspondent pas au thème de l'environnement.",
    developpeur: "Brandon Ducheine",
    listeTagJeu: ["Cherche et trouve", "Découverte"],
    url: "https://h26-2j2.github.io/Quipro-Quoi-/",
    vignette: "ducheine-brandon-vignette.jpg"
},
{
    titre: "Ramassez-les tous",
    publicMin: 6,
    publicMax: 8,
    description: "Amuse toi à desseler les différents types de bacs de déchets.",
    developpeur: "Elie Kozaily",
    listeTagJeu: ["Action", "Écologique", "Sensibilisation"],
    url: "https://h26-2j2.github.io/KozailyElie_TravailPrartique/",
    vignette: ""
},
{
    titre: "Trouve l'animal!",
    publicMin: 4,
    publicMax: 6,
    description: "Trouve l'animal ! est un jeu interactif avec des cartes d'animaux sur lesquelles il faudra cliquer lorsque la voix annoncera l'animal demandé.",
    developpeur: "Caleb Celestin",
    listeTagJeu: ["Réflexion", "Éducatif", "Puzzle"],
    url: "https://h26-2j2.github.io/Celestin_Caleb_TpFinal/",
    vignette: "celestin-caleb-vignette.jpg"
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
}
];


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
        age >= jeu.publicMin && age <= jeu.publicMax
    );
}


/**************************************** Fonction AfficherJeux(liste) ****************************************/
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

    //Lance l'animation en appelant la fonction AfficherJeux(liste)
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition
    document.startViewTransition(() => {
        afficherJeux(jeuxFiltres);
    });
}


/**************************************** Affichage des jeux ****************************************/
if (sectionListeJeux) {
    afficherJeux(listeJeux);
}

if (boutonRecherche){
    boutonRecherche.addEventListener("click", rechercherJeux);
}