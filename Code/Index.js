document.addEventListener('DOMContentLoaded', () => {

    // --- 1. CONFIGURATION : VOTRE BASE DE DONNÉES ---
    // C'est ici que vous liez des mots-clés à vos pages HTML.
    const pagesDuSite = [
        {
            url: "Page/President.html",
            titre: "Le Président - Anton Vorne",
            motsCles: ["anton", "vorne", "president", "chef", "dirigeant", "biographie", "elena"]
        },
		{
            url: "Page/President_old.html",
            titre: "Les anciens présidents",
            motsCles: ["president", "sov", "hrovat", "trest", "volk", "korl", "oren"]
        },
		{
            url: "Page/Cabinet.html",
            titre: "Le cabinet présidentiel",
            motsCles: ["cabinet", "president", "danek", "hroll", "montray", "krov", "sorel"]
        },
		{
            url: "Page/Textes.html",
            titre: "Les textes fondateurs de L'Oslavie",
            motsCles: ["texte", "constitution", "loi"]
        },
		{
            url: "Page/Symboles.html",
            titre: "Les symboles officiels de L'Oslavie",
            motsCles: ["symboles", "drapeau", "hymne", "sceau"]
        },
		{
            url: "Page/Carte.html",
            titre: "La géographie Oslave",
            motsCles: ["carte", "géographie", "district", "volyn", "kogan"]
        },
		{
            url: "Page/Tarnovsky.html",
            titre: "Fondation Tarnovsky",
            motsCles: ["tarnovsky", "fondation", "mafia", "mécénat"]
        },
    ];


    // --- 2. LA LOGIQUE DE RECHERCHE ---
    const searchInput = document.getElementById('barre-recherche');
    const suggestionsBox = document.getElementById('suggestions-box');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim(); // On met tout en minuscule
        
        // On vide la boîte de suggestions à chaque frappe
        suggestionsBox.innerHTML = '';
        suggestionsBox.style.display = 'none';

        // Règle : Il faut au moins 3 caractères pour chercher
        if (query.length < 3) return;

        // FILTRAGE : On cherche les pages qui correspondent
        const resultats = pagesDuSite.filter(page => {
            // On regarde si le mot tapé est dans le TITRE...
            const matchTitre = page.titre.toLowerCase().includes(query);
            // ... OU s'il est dans la liste des MOTS-CLÉS
            const matchKeyword = page.motsCles.some(mot => mot.includes(query));
            
            return matchTitre || matchKeyword;
        });

        // AFFICHAGE DES RÉSULTATS
        if (resultats.length > 0) {
            suggestionsBox.style.display = 'block'; // On montre la boîte

            resultats.forEach(page => {
                // Création de l'élément visuel pour chaque résultat
                const div = document.createElement('div');
                div.classList.add('suggestion-item');
                
                // Le texte affiché : Le Titre de la page (plus propre)
                // Vous pouvez ajouter une petite flèche ou icône ici
                div.innerHTML = `
                    <span class="sugg-titre">${page.titre}</span>
                    <span class="sugg-url">Aller vers la page</span>
                `;

                // Au clic, on redirige
                div.addEventListener('click', () => {
                    window.location.href = page.url;
                });

                suggestionsBox.appendChild(div);
            });
        }
    });

    // Cacher les suggestions si on clique ailleurs sur la page
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-wrapper')) {
            suggestionsBox.style.display = 'none';
        }
    });
});