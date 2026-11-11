document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LE CATALOGUE DE PUBLICITÉS ---
    // Vous pouvez ajouter autant de publicités que vous le souhaitez ici.
    const cataloguePubs = [
        {
            id: "beurre-krimy",
            titre: "Beurre Krimy",
            slogan: "Le goût authentique de la terre oslave, tartiné avec amour par Krimy",
            texteLong: "Produit exclusivement dans les fermes coopératives d'État, le beurre Krimy garantit une énergie durable pour tous les travailleurs. Riche, onctueux et patriote. Exigez le sceau officiel !",
            image: "../Images/Publicite/Krimy.png",
            bgColor: "#f9e4c8",   /* Jaune beurre/crème */
            textColor: "#5c3a21"  /* Marron foncé */
        },
        {
            id: "tracteurs-t84",
            titre: "Tracteurs Osla T-84",
            slogan: "Maîtrisez la terre de nos ancêtres.",
            texteLong: "La nouvelle gamme de tracteurs lourds est arrivée. Avec son moteur de 200 chevaux, le T-84 laboure l'avenir de l'Oslavie. Disponible sur réquisition gouvernementale.",
            image: "../Contenu-site/pub-tracteur.jpg",
            bgColor: "#d80000",   /* Rouge officiel */
            textColor: "#ffffff"  /* Blanc */
        },
        {
            id: "emprunt-national",
            titre: "Emprunt National",
            slogan: "Votre épargne bâtit le Second État.",
            texteLong: "Souscrivez à l'emprunt d'État à 5%. Chaque couronne investie est une pierre de plus pour notre souveraineté. Rendez-vous dans votre bureau de poste.",
            image: "../Contenu-site/pub-emprunt.jpg",
            bgColor: "#1a2530",   /* Bleu très sombre */
            textColor: "#ffc691"  /* Cuivre/Or */
        }
    ];

    // --- 2. LE GÉNÉRATEUR ALÉATOIRE ---
    // On récupère tous les emplacements publicitaires de la page
    const encartsPublicitaires = document.querySelectorAll('.encart-pub');

    encartsPublicitaires.forEach(encart => {
        // Sélection d'une pub au hasard dans le catalogue
        const pubAleatoire = cataloguePubs[Math.floor(Math.random() * cataloguePubs.length)];

        // On vérifie quel est le format demandé par la classe CSS de l'encart
        let format = "rectangle"; // Format par défaut
        if (encart.classList.contains('format-horizontal')) format = "horizontal";
        if (encart.classList.contains('format-vertical')) format = "vertical";

        // Application des couleurs de la pub à la boîte
        encart.style.backgroundColor = pubAleatoire.bgColor;
        encart.style.color = pubAleatoire.textColor;
        encart.style.borderColor = pubAleatoire.textColor; // La bordure prend la couleur du texte

        // --- 3. INJECTION DU CONTENU SELON LE FORMAT ---
        let contenuHTML = `<div class="pub-label">Publicité</div>`;

        if (format === "horizontal") {
            // Bandeau plat : Image à gauche, Titre et Slogan à droite (Pas de texte long)
            contenuHTML += `
                <div class="pub-contenu-flex">
                    <img src="${pubAleatoire.image}" alt="${pubAleatoire.titre}" class="pub-img">
                    <div class="pub-textes">
                        <h4 class="pub-titre">${pubAleatoire.titre}</h4>
                        <strong class="pub-slogan">${pubAleatoire.slogan}</strong>
                        <p class="pub-texte-long">${pubAleatoire.texteLong}</p>
                    </div>
                </div>
            `;
        } 
        else if (format === "vertical") {
            // Colonne étroite : Image en haut, Titre, Slogan et Texte complet en dessous
            contenuHTML += `
                <div class="pub-contenu-colonne">
                    <img src="${pubAleatoire.image}" alt="${pubAleatoire.titre}" class="pub-img">
                    <h4 class="pub-titre">${pubAleatoire.titre}</h4>
                    <strong class="pub-slogan">${pubAleatoire.slogan}</strong>
                    <p class="pub-texte-long">${pubAleatoire.texteLong}</p>
                </div>
            `;
        } 
        else if (format === "rectangle") {
            // Boîte intégrée au texte : Pareil que vertical, mais proportions différentes en CSS
            contenuHTML += `
                <div class="pub-contenu-colonne">
                    <h4 class="pub-titre">${pubAleatoire.titre}</h4>
                    <img src="${pubAleatoire.image}" alt="${pubAleatoire.titre}" class="pub-img">
                    <strong class="pub-slogan">${pubAleatoire.slogan}</strong>
                    <p class="pub-texte-long">${pubAleatoire.texteLong}</p>
                </div>
            `;
        }

        encart.innerHTML = contenuHTML;
    });
});