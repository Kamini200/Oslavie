document.addEventListener('DOMContentLoaded', () => {
    
    // 1. GESTION DU DÉCALAGE MENU (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // VÉRIFICATION : L'élément cible est-il dans une modale ?
                const parentModal = targetElement.closest('.modal-contenu');
                
                if (parentModal) {
                    // Si oui, on défile à l'intérieur de la modale
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    // Si non, on défile sur la page principale avec la marge du menu
                    const offset = 100; 
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
            
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // 2. PRÉPARATION FUTURE (Placeholder)
    console.log("Script de contenu chargé : Prêt pour gérer les sidebars.");
});


// --- GESTION DES MODALES (ANNEXES) ---

let modalActiveID = null;

// Fonction pour ouvrir une modale spécifique
function ouvrirModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        // 1. Afficher la modale (avec une petite latence pour l'effet de transition CSS)
        modal.style.display = 'flex'; // On le met en flex d'abord
        
        // Timeout pour permettre au navigateur de calculer le display avant de changer l'opacité
        setTimeout(() => {
            modal.classList.add('is-visible');
        }, 10);

        // 2. Bloquer le scroll de la page principale
        document.body.classList.add('no-scroll');
        
        modalActiveID = id;
    }
}

// Fonction pour fermer la modale active
function fermerModal() {
    // On cherche toutes les modales visibles
    const modals = document.querySelectorAll('.modal-overlay.is-visible');
    
    modals.forEach(modal => {
        modal.classList.remove('is-visible');
        
        // On attend la fin de la transition (0.3s) pour remettre display:none
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });

    // Réactiver le scroll
    document.body.classList.remove('no-scroll');
    modalActiveID = null;
}

// --- ÉCOUTEURS D'ÉVÉNEMENTS POUR FERMETURE ---

// 1. Touche ÉCHAP (Escape)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalActiveID) {
        fermerModal();
    }
});

// 2. Clic en dehors de la boîte blanche
// On attache l'événement sur tous les overlays
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        // Si l'élément cliqué EST l'overlay (et pas son contenu enfant)
        if (e.target === overlay) {
            fermerModal();
        }
    });
});