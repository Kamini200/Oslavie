document.addEventListener('DOMContentLoaded', () => {
    
    // --- CONFIGURATION ---
    const tempsTotal = 32; // Durée totale avant fermeture
    const tempsEcriture = 30; // Durée de l'animation texte
    
    // Le message à écrire (vous pouvez le changer ici)
    const messageTexte = "Déconnexion sécurisée en cours... Sauvegarde des archives de l'État... Fin de session imminente. Au revoir.";

    // --- VARIABLES ---
    const affichageTexte = document.getElementById('typewriter-text');
    const affichageCompteur = document.getElementById('decompte');
    let tempsRestant = tempsTotal;

    // --- 1. GESTION DU DÉCOMPTE (32 sec) ---
    const intervalCompteur = setInterval(() => {
        tempsRestant--;
        affichageCompteur.textContent = tempsRestant;

        // Si on arrive à 0
        if (tempsRestant <= 0) {
            clearInterval(intervalCompteur);
            fermerLaPage();
        }
    }, 1000); // Toutes les 1 secondes


    // --- 2. GESTION DE L'ÉCRITURE (Typewriter) ---
    // Calcul de la vitesse : 30 secondes (30000ms) divisé par le nombre de lettres
    // On retire 100ms de marge de sécurité
    const vitesseFrappe = (tempsEcriture * 1000) / messageTexte.length;
    
    let indexLettre = 0;

    function ecrireLettre() {
        if (indexLettre < messageTexte.length) {
            // On ajoute la lettre suivante
            affichageTexte.textContent += messageTexte.charAt(indexLettre);
            indexLettre++;
            
            // On rappelle la fonction après le délai calculé
            setTimeout(ecrireLettre, vitesseFrappe);
        }
    }

    // Lancement de l'écriture
    ecrireLettre();


    // --- 3. FONCTION DE FERMETURE ---
    function fermerLaPage() {
        // Tente de fermer l'onglet
        window.close();

        // FALLBACK : Si le navigateur bloque window.close(), on redirige ailleurs
        // car on ne peut pas forcer la fermeture si l'onglet n'a pas été ouvert par script.
        setTimeout(() => {
            document.body.innerHTML = "<div style='color:white; text-align:center; margin-top:20%; font-family:sans-serif;'>Session terminée.<br>Vous pouvez fermer cet onglet.</div>";
            // Ou redirection vers Google : window.location.href = "https://www.google.com";
        }, 100);
    }
});