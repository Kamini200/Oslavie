document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.scrolly-trigger');
    const etapes = document.querySelectorAll('.scrolly-etape');
    const fonds = document.querySelectorAll('.scrolly-fond');

    if(triggers.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeStep = entry.target.getAttribute('data-etape-active');

                if (activeStep === "end") return; // Laisse le dernier état figé

                // 1. GESTION DES TRANSITIONS A VIDE (ex: "transition-2", "transition-3")
                if (activeStep.startsWith("transition")) {
                    etapes.forEach(e => e.classList.remove('is-visible'));
                    fonds.forEach(f => f.classList.remove('active'));
                    
                    const cibleFond = activeStep.split('-')[1]; // Récupère le chiffre après le tiret
                    const fondElement = document.getElementById('fond-' + cibleFond);
                    if (fondElement) fondElement.classList.add('active');
                    return;
                }

                const stepNum = parseInt(activeStep);
                
                // Gestion du retour tout en haut (étape 0)
                if (isNaN(stepNum) || stepNum === 0) {
                    if (stepNum === 0) {
                        fonds.forEach(f => f.classList.remove('active'));
                        const f1 = document.getElementById('fond-1');
                        if (f1) f1.classList.add('active');
                        etapes.forEach(e => e.classList.remove('is-visible'));
                    }
                    return;
                }

                // 2. DÉDUCTION INTELLIGENTE DU FOND ACTIF
                // Le script cherche l'attribut 'data-fond' du chiffre en cours d'affichage
                const etapeCible = document.querySelector(`.scrolly-etape[data-etape="${stepNum}"]`);
                let fondActif = 1;
                if (etapeCible) {
                    fondActif = parseInt(etapeCible.getAttribute('data-fond'));
                }

                // 3. MISE À JOUR DE L'IMAGE DE FOND
                fonds.forEach(f => f.classList.remove('active'));
                const fondElement = document.getElementById('fond-' + fondActif);
                if (fondElement) fondElement.classList.add('active');

                // 4. MISE À JOUR DES CHIFFRES (Apparition et maintien)
                etapes.forEach(etape => {
                    const etapeNum = parseInt(etape.getAttribute('data-etape'));
                    const etapeFond = parseInt(etape.getAttribute('data-fond'));
                    
                    // On affiche le chiffre s'il appartient à l'image actuelle ET que son tour est passé
                    if (etapeFond === fondActif && etapeNum <= stepNum) {
                        etape.classList.add('is-visible');
                    } else {
                        etape.classList.remove('is-visible');
                    }
                });
            }
        });
    }, {
        // Déclenche l'action quand le déclencheur invisible passe exactement au milieu de l'écran
        rootMargin: "-50% 0px -50% 0px" 
    });

    triggers.forEach(trigger => observer.observe(trigger));
	
	
	
	// --- GESTION DU CAROUSEL D'ACTUALITÉS ---
    const track = document.getElementById('actu-track');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    
    if(track && btnPrev && btnNext) {
        let currentIndex = 0;
        const cards = track.querySelectorAll('.carousel-card');
        
        // On affiche 2 cartes, le maximum d'index est donc le total de cartes moins 2
        const maxIndex = Math.max(0, cards.length - 2); 
        
        // Initialisation de l'opacité du bouton précédent
        btnPrev.style.opacity = '0.3';
        btnPrev.style.cursor = 'default';

        function updateCarousel() {
            // Récupère la largeur réelle d'une carte + l'espacement (gap de 30px)
            const cardWidth = cards[0].offsetWidth;
            const gap = 30; 
            const shift = currentIndex * (cardWidth + gap);
            
            track.style.transform = `translateX(-${shift}px)`;
            
            // Mise à jour de l'apparence des boutons
            btnPrev.style.opacity = currentIndex === 0 ? '0.3' : '1';
            btnPrev.style.cursor = currentIndex === 0 ? 'default' : 'pointer';
            
            btnNext.style.opacity = currentIndex === maxIndex ? '0.3' : '1';
            btnNext.style.cursor = currentIndex === maxIndex ? 'default' : 'pointer';
        }

        btnNext.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        });

        btnPrev.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
        
        // Recalcule le décalage si la fenêtre est redimensionnée
        window.addEventListener('resize', updateCarousel);
    }
});