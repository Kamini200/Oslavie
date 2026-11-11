// --- 1. VARIABLES GLOBALES (Accessibles partout) ---
let encartOuvertID = null; // Pour savoir quel encart est ouvert

// --- 2. INITIALISATION AU CHARGEMENT (Pour le menu principal) ---
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const menuImg = document.getElementById('menu-img');
    const topBar = document.getElementById('top-bar');
    
    // ATTENTION : Vérifiez bien que ces noms correspondent à vos fichiers réels
    const imgClosed = '../Contenu site/menu closed.png';
    const imgOpen = '../Contenu site/menu open.png';

    let isOpen = false;
    let isLocked = false; 

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            if (isLocked) return;

            isLocked = true;
            setTimeout(() => { isLocked = false; }, 500);

            if (!isOpen) {
                // ACTION : OUVRIR
                topBar.classList.add('is-open');
                animerIcone(menuImg);
                setTimeout(() => { menuImg.src = imgOpen; }, 250);
                isOpen = true;
            } else {
                // ACTION : FERMER
                topBar.classList.remove('is-open');
                animerIcone(menuImg);
                setTimeout(() => { menuImg.src = imgClosed; }, 250);
                isOpen = false;
            }
        });
    }
});

// Petite fonction utilitaire pour l'animation
function animerIcone(imgElement) {
    imgElement.classList.add('rotate-anim');
    setTimeout(() => {
        imgElement.classList.remove('rotate-anim');
    }, 500);
}


// --- 3. FONCTIONS PUBLIQUES (Pour les onclick HTML) ---
// Elles doivent être EN DEHORS du DOMContentLoaded

function ouvrirEncart(id) {
    // A. Récupération de l'événement global (window.event)
    const evt = window.event;
    
    // B. Trouver le bouton cliqué (même si on clique sur l'image dedans)
    // .closest('button') remonte les parents jusqu'à trouver le <button>
    const boutonDeclencheur = evt.target.closest('button'); 

    const encart = document.getElementById('encart-global');

    // C. Si on clique sur le bouton du menu DÉJÀ ouvert -> On ferme tout
    if (encartOuvertID === id) {
        fermerEncart();
        return;
    }

    // D. On remplit l'encart
    // Note: On vérifie que contenuEncarts (de l'autre fichier) est bien chargé
    if (typeof contenuEncarts !== 'undefined' && contenuEncarts[id]) {
        encart.innerHTML = contenuEncarts[id];
		if (id === 'options') {
            mettreAJourBoutonTheme();
        }
        encartOuvertID = id;
        encart.classList.add('visible');
        
        // E. Calcul de position
        if (boutonDeclencheur) {
            positionnerEncart(boutonDeclencheur, encart);
        }
    } else {
        console.warn("Contenu introuvable ou fichier contenu non chargé pour : " + id);
    }
    
    // F. Empêche la fermeture immédiate
    evt.stopPropagation();
}

function fermerEncart() {
    const encart = document.getElementById('encart-global');
    if (encart) {
        encart.classList.remove('visible');
        encartOuvertID = null;
    }
}

function positionnerEncart(bouton, encart) {
    const rectBtn = bouton.getBoundingClientRect();
    const rectEncart = encart.getBoundingClientRect();
    const screenW = window.innerWidth;

    // Centre du bouton
    const btnCenter = rectBtn.left + (rectBtn.width / 2);
    
    // Position théorique de l'encart (centré sur le bouton)
    let leftPos = btnCenter - (rectEncart.width / 2);

    // Contraintes (50px de bord)
    const marge = 50;
    const maxLeft = screenW - rectEncart.width - marge;
    const minLeft = marge;

    if (leftPos < minLeft) leftPos = minLeft;
    if (leftPos > maxLeft) leftPos = maxLeft;

    // Application
    encart.style.top = (rectBtn.bottom + 15) + "px";
    encart.style.left = leftPos + "px";

    // Position de la flèche
    const arrowPos = btnCenter - leftPos;
    encart.style.setProperty('--arrow-left', arrowPos + "px");
}

// --- 4. CLIC AILLEURS POUR FERMER ---
document.addEventListener('click', (e) => {
    const encart = document.getElementById('encart-global');
    
    // Si l'encart existe et est visible
    if (encart && encart.classList.contains('visible')) {
        // Si le clic n'est PAS dans l'encart
        if (!encart.contains(e.target)) {
            fermerEncart();
        }
    }
});

// Redimensionnement
window.addEventListener('resize', () => {
    if(encartOuvertID) fermerEncart();
});


// --- GESTION DU MODE NUIT ---

// 1. Appliquer le thème au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'night') {
        document.body.classList.add('night-mode');
    }
});

// 2. Fonction déclenchée par le clic sur le bouton
function basculerModeNuit() {
    const body = document.body;
    body.classList.toggle('night-mode');
    
    // Sauvegarde
    if (body.classList.contains('night-mode')) {
        localStorage.setItem('theme', 'night');
    } else {
        localStorage.setItem('theme', 'day');
    }

    // Mise à jour visuelle du bouton immédiatement
    mettreAJourBoutonTheme(); 
}

// 3. Fonction pour mettre à jour le texte du bouton (Soleil/Lune)
function mettreAJourBoutonTheme() {
    const btn = document.getElementById('theme-toggle');
    // Si le bouton n'est pas affiché (encart fermé), on ne fait rien
    if (!btn) return; 

    if (document.body.classList.contains('night-mode')) {
        btn.innerHTML = '<span class="icon">☀</span> Mode Jour';
    } else {
        btn.innerHTML = '<span class="icon">☾</span> Mode Nuit';
    }
}