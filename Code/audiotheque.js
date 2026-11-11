document.addEventListener('DOMContentLoaded', () => {

    // --- 1. BASE DE DONNÉES DES ARCHIVES SONORES ---
    const archivesAudio = [
        { // hymne
            id: "Hymne",
            titre: "Hymne de l'Oslavie",
            compositeur: "Orchestre National, 1984",
            date: "1984",
            image: "../Musique/Hymne.jpg",
            fichierAudio: "../Musique/Hymne.mp3",
            paroles: 	`Je vois l'homme avancer sous le poids du métal,
						Pour que rie son enfant à la table du soir.
						Il accepte l'usure et le sombre devoir,
						Et ses mains ont noirci dans le froid hivernal.
						
						Ô peuple de la glèbe, écoute ce pas lourd,
						C'est le chant du marron qui tombe et s'enracine.
						Nous marchons avec eux, sans gloire et sans détour,
						Unis par le devoir sous l'austère poitrine.
						
						Quand l'appel retentit au-delà des canons,
						Il échange l'outil pour l'acier du fusil.
						Il offre son repos, son sang et son exil,
						Pour que dorment en paix les toits de nos maisons.
						
						Ô peuple de la glèbe, écoute ce pas lourd,
						C'est le chant du marron qui tombe et s'enracine.
						Nous marchons avec eux, sans gloire et sans détour,
						Unis par le devoir sous l'austère poitrine.
						
						Et s'il doit s'arrêter au bout de l'avenue,
						Son corps deviendra terre, humble et silencieux.
						Mais son âme a tracé, sous le regard des cieux,
						La route que suivra la jeunesse venue.
						
						Ô peuple de la glèbe, écoute ce pas lourd,
						C'est le chant du marron qui tombe et s'enracine.
						Nous marchons avec eux, sans gloire et sans détour,
						Unis par le devoir sous l'austère poitrine.`,
            histoire: `Au crépuscule de l'hiver 1842, alors que la nation traversait l'une des périodes les plus incertaines de sa genèse, le poète K. Varkas ne cherchait pas à composer une marche d'État. Les carnets de l'époque le décrivent errant sur les boulevards brumeux, observant le flot ininterrompu des citoyens rentrant des forges ou montant la garde. C'est dans ce silence lourd, rythmé par le simple bruit des bottes sur les pavés et la respiration blanchie par le gel, qu'est né Konyr Jol.

						La démarche de Varkas constitue une rupture littéraire majeure pour l'époque : le refus catégorique de l'héroïsme triomphant. Là où les empires voisins commandaient à leurs artistes des odes à la victoire, à l'écrasement de l'ennemi et à la gloire divine, Varkas a choisi de sacraliser l'épuisement. Sa plume ne cherche pas à galvaniser une foule, mais à enlacer la fatigue d'un peuple. Le protagoniste de l'hymne n'est pas un conquérant de marbre ; c'est un père aux mains noircies par le gel, un travailleur anonyme qui accepte que sa propre vie ne soit qu'un outil d'usure destiné à bâtir le confort de la génération suivante.

						Le choix du marronnier comme allégorie centrale est l'acte fondateur de la conscience oslave. Varkas détourne le regard des chênes millénaires ou des lauriers impériaux pour se fixer sur un arbre urbain, modeste, planté au bord de la chaussée. Le fruit du marronnier, rugueux et enfermé dans sa bogue épineuse, n'offre pas un spectacle grandiose lorsqu'il chute. Il heurte la terre dure, s'enfouit dans "la glèbe" et pourrit silencieusement pour nourrir le sol. Par cette métaphore, Varkas a offert à ses compatriotes une consolation immense : la promesse que leur dureté, leur anonymat et leur trépas n'étaient pas vains, mais constituaient le terreau même de la survie nationale.

						C'est cette vérité nue qui explique le lien viscéral, presque charnel, qui unit le peuple oslave à son hymne. L'Allée des Marronniers n'est pas perçue comme une injonction du pouvoir, mais comme un miroir intime. Lorsqu'il résonne aujourd'hui, il ne déclenche aucune fureur guerrière, mais une profonde communion mélancolique. C'est un pacte murmuré entre ceux qui portent le métal aujourd'hui et ceux qui deviendront poussière demain, le rappel partagé que la véritable grandeur d'un peuple ne réside pas dans sa capacité à briller, mais dans sa volonté de s'enraciner.`
        },
        { // nocturne
            id: "Nocturne",
            titre: "Nocturne d'une comptesse oubliée",
            compositeur: "Blanche de Vulpiers",
            date: "1730",
            image: "../Musique/Nocturne.jpg",
            fichierAudio: "../Musique/Nocturne.mp3",
            paroles: "",
            histoire: 	`Premier grand succès de sa compositrice, ce Nocturne jette les bases de ce qui deviendra la "sonorité oslave" primitive. L'œuvre se distingue par un dialogue intime et mélancolique entre les cordes frottées (violons) et le clavier (piano, alors en pleine évolution), soutenu par de très légères percussions (essentiellement des timbales feutrées). Ce n'est pas une musique de cour destinée à étourdir ; c'est une musique de chambre, introspective, qui refuse la virtuosité ostentatoire au profit de la profondeur émotionnelle. La percussion, discrète mais obsédante, annonce déjà ce pas lourd et régulier qui deviendra la marque de fabrique de nos hymnes nationaux modernes.
						
						L'histoire entourant la création de cette pièce ajoute à sa résonance morale. Les archives et la tradition orale rapportent que Blanche de Vulpiers, alors jeune artiste sans mécène et confrontée à la dureté de l'époque, fut recueillie anonymement par une noble déchue, ruinée et mise au ban de la bonne société. En témoignage de sa reconnaissance, Vulpiers aurait composé ce nocturne, dédié à cette bienfaitrice effacée de l'histoire.
						Cette légende résonne puissamment. Elle illustre que l'art véritable ne naît pas de la commande des puissants, mais de la solidarité entre les humbles et de la gratitude envers ceux qui tendent la main dans l'adversité.
						
						Aujourd'hui, le Nocturne d'une comtesse oubliée constitue une étape incontournable de la formation musicale nationale. C'est l'une des premières œuvres majeures étudiées par les jeunes élèves des instituts d'art, et elle figure au programme d'examen obligatoire du Diplôme Général d'Aptitude (DGA) en option "Culture Patrimoniale".
						Régulièrement réinterprété par les conservatoires régionaux, de Faellyne à Port-Vial, ce nocturne rappelle que la rigueur de l'Oslavie s'est bâtie sur une âme sensible. Son exécution requiert une maîtrise absolue du tempo et de la nuance, enseignant à la jeunesse oslave que l'harmonie naît de la retenue et que la mémoire de ceux qui nous ont aidés ne doit jamais s'éteindre.`
        },
        { // gres
            id: "Gres",
            titre: "L'escalier de grès",
            compositeur: "Blanche de Vulpiers",
            date: "1782",
            image: "../Musique/Gres.jpg",
            fichierAudio: "../Musique/Gres.mp3",
            paroles: "",
            histoire: 	`Musicalement, L'Escalier de grès marque une rupture brutale. Le dialogue équilibré d'autrefois cède la place à une domination quasi absolue des violons. Poussés dans leurs ultimes retranchements, ils livrent une partition fiévreuse, heurtée et profondément dramatique. L'accompagnement est réduit à une austérité glaçante : seules quelques cordes graves et de très rares percussions viennent ponctuer l'envolée des solistes, évoquant le bruit sec d'un pas trébuchant sur une pierre rugueuse. Cette orchestration minimaliste mais perçante retranscrit à la perfection l'angoisse d'un peuple marchant au bord du gouffre.
						
						La genèse de l'œuvre est en elle-même une leçon de persévérance oslave. Face au chaos politique de l'époque, les mécènes s'étaient raréfiés. Blanche de Vulpiers consacra trois longues années à l'écriture de cette pièce, s'isolant du tumulte et finançant son travail sur ses propres et ultimes économies. Sans maître, sans commande officielle et sans soutien, elle composa pour l'Histoire. La maladie l'emporta peu après l'achèvement de la partition ; les chroniques rappellent avec gravité qu'elle ne put assister qu'à six représentations publiques de son chef-d'œuvre avant de s'éteindre.
						
						Aujourd'hui, si le Nocturne forme l'âme des jeunes élèves, L'Escalier de grès en forge le caractère. Il ne s'agit plus d'une simple introduction au patrimoine, mais de l'une des pièces les plus ardues du répertoire classique national.
						Dans nos conservatoires supérieurs, son exécution est redoutée et respectée. Elle constitue l'épreuve de feu pour tout violoniste oslave aspirant au statut de Maître. Techniquement impitoyable, la partition n'autorise aucune hésitation : elle exige des doigts capables d'une agilité furieuse tout en conservant une froideur émotionnelle de façade. Réussir l'ascension de L'Escalier de grès, c'est prouver que l'on possède non seulement le talent, mais surtout la discipline et l'endurance qui font les grands serviteurs de l'État.`
        },
		{ // cidre
            id: "Cidre",
            titre: "Le cidre soupire",
            compositeur: "Jacques Milcendeau",
            date: "1836",
            image: "../Musique/Cidre.jpg",
            fichierAudio: "../Musique/Cidre.mp3",
            paroles: 	`Les labours d'or boivent la pluie, 
						Le cidre dort, sous les débris.
						J'ai le pain chaud, la table est vaste,
						Mon cœur paysan, mon geste chaste.
						Mais l'horizon garde ton ombre, 
						Dans chaque feuille, un reflet sombre.
						
						Le fer et le verre, les ponts s'élancent,
						Je bois la foudre et la connaissance.
						Théâtre d'ambre et nuits de soie,
						J'ai tout conquis, hors le droit à la joie.
						La ville gronde, mon esprit s'éclaire, 
						Mais le vide au centre est une frontière.
						
						La même saison nous dévore !
						Un même ciel mais sans aurore !
						Tu as la terre, j'ai le pavé !
						Nos rêves en deux se sont crevés ! (x2)
						Heureux dis-tu ? L'ombre nous suit.
						Dans ce bonheur, quelle est ma nuit. (x2)
						
						L'automne passe, l'aurore brille,
						Je vois l'enfant, je vois la ville,
						Le temps s'enfuit, rien ne s'efface,
						Ton souvenir hante ma place.
						
						La même saison nous dévore !
						Un même ciel mais sans aurore !
						Tu as la terre, j'ai le pavé !
						Nos rêves en deux se sont crevés ! (x2)
						Heureux dis-tu ? L'ombre nous suit.
						Dans ce bonheur, quelle est ma nuit. (x2)
						
						Silence d'automne... le mien est d'acier.
						Le tien hanté est oublié.`,
            histoire: 	`L'œuvre tire sa puissance de son universalité. À travers la dualité de ses deux protagonistes, Louis et Élise, Milcendeau a su capter la déchirure d'une nation en pleine mutation. Louis incarne l'ancrage terrien (ce qui deviendra plus tard l'esprit des Basses-Terres) : la rudesse noble du travail agricole, le pain chaud et l'automne mélancolique. Élise, quant à elle, représente l'attraction de la métropole, l'essor de la ville avec ses ponts de fer et sa soif de connaissances.
						Leur séparation n'est dictée par aucune guerre matérielle, mais par l'incompatibilité de leurs destins géographiques. Cette "ambiance mi-figue mi-raisin", ce regret inavoué qui traverse toute la pièce, résonne profondément dans l'âme des Oslaves modernes. Chaque citoyen qui a dû quitter sa province natale pour servir l'État dans le District Central, ou qui a vu ses enfants partir pour les usines de la Ceinture Noire, se reconnaît dans ce déchirement.
						
						Aujourd'hui, cet opéra remplit les salles à chaque programmation. Pour le public oslave, traditionnellement stoïque, assister au Cidre soupire est un acte de libération émotionnelle. La complainte de Louis et Élise rappelle que la modernisation a un coût intime. L'État tolère, et même encourage, la diffusion de cette œuvre : elle enseigne que le devoir ("la terre" ou "le pavé") finit toujours par prendre le pas sur les rêves individuels, et que la nostalgie est le prix noble à payer pour la construction d'un monde nouveau.`
        }
    ];

    // --- 2. GÉNÉRATION DE LA GRILLE ---
    const grille = document.getElementById('grille-albums');
    
    if (grille) {
        archivesAudio.forEach(morceau => {
            // Création de la carte HTML pour chaque morceau
            const card = document.createElement('div');
            card.className = 'album-card';
            card.onclick = () => ouvrirLecteur(morceau.id);

            card.innerHTML = `
                <img src="${morceau.image}" alt="${morceau.titre}" class="album-cover">
                <div class="album-titre">${morceau.titre}</div>
                <div class="album-date">${morceau.date}</div>
            `;
            grille.appendChild(card);
        });
    }

    // --- 3. FONCTIONS DU LECTEUR ---
    
    const modal = document.getElementById('modal-lecteur');
    const lecteurAudio = document.getElementById('lecteur-audio');

    // Ouvrir le lecteur
    window.ouvrirLecteur = function(id) {
        // On cherche le morceau dans la base de données
        const morceau = archivesAudio.find(m => m.id === id);
        
        if (morceau) {
            // On remplit les infos
            document.getElementById('lecteur-jaquette').src = morceau.image;
            document.getElementById('lecteur-titre').innerText = morceau.titre;
            document.getElementById('lecteur-compositeur').innerText = morceau.compositeur;
            
            // On charge le fichier audio
            lecteurAudio.src = morceau.fichierAudio;

            // Gestion des Paroles (On cache l'accordéon si vide)
            const blocParoles = document.getElementById('bloc-paroles');
            if (morceau.paroles && morceau.paroles.trim() !== "") {
                document.getElementById('lecteur-paroles').innerText = morceau.paroles;
                blocParoles.style.display = "block";
            } else {
                blocParoles.style.display = "none";
            }

            // Gestion de l'Histoire
            const blocHistoire = document.getElementById('bloc-histoire');
            if (morceau.histoire && morceau.histoire.trim() !== "") {
                document.getElementById('lecteur-histoire').innerText = morceau.histoire;
                blocHistoire.style.display = "block";
            } else {
                blocHistoire.style.display = "none";
            }

            // On affiche la modale
            modal.style.display = "flex";
            setTimeout(() => modal.classList.add('is-visible'), 10);
            document.body.style.overflow = 'hidden'; // Bloque le scroll derrière
        }
    };

    // Fermer le lecteur
    window.fermerLecteur = function() {
        modal.classList.remove('is-visible');
        setTimeout(() => modal.style.display = "none", 300);
        document.body.style.overflow = 'auto'; // Réactive le scroll
        
        // TRÈS IMPORTANT : On coupe la musique en fermant !
        lecteurAudio.pause();
        lecteurAudio.currentTime = 0; // Remet à zéro
    };

    // Fermer si on clique sur le fond noir
    modal.addEventListener('click', (e) => {
        if (e.target === modal) fermerLecteur();
    });
});