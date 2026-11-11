const configurationsMenu = {
    "index": `
        <li><a href="index.html">Accueil</a></li>
        <li><a href="apropos.html">À propos</a></li>
        <li><button onclick="ouvrirEncart('contact')">Nous contacter</button></li>
    `,

    "politique": `
        <li><button onclick="ouvrirEncart('Actu')">Actualités</button></li>
		<li><a href="Musee.html">Culture</a></li>
        <li><button onclick="ouvrirEncart('Présidence')">Présidence</button></li>
        <li><button onclick="ouvrirEncart('Institution')">Institution</button></li>
    `,

    "XXX": `
        <li><a href="profil.html">Mon Profil</a></li>
        <li><a href="logout.html" style="color: red;">Déconnexion</a></li>
    `
};

// Fonction pour injecter le menu au chargement
function chargerMenu() {
    const topBar = document.getElementById('top-bar');
    const listeMenu = document.getElementById('liste-menu');

    // 1. On récupère le nom du menu voulu défini dans le HTML de la page
    const typeMenu = topBar.getAttribute('data-menu');

    // 2. On vérifie si ce type existe dans notre configuration
    if (configurationsMenu[typeMenu]) {
        listeMenu.innerHTML = configurationsMenu[typeMenu];
    } else {
        console.warn("Aucun menu configuré pour : " + typeMenu);
        // Fallback optionnel : charger le menu standard par défaut
        listeMenu.innerHTML = configurationsMenu["standard"];
    }
}

const contenuEncarts = {
    "options": `
        <h4>Paramètres</h4>
        <button id="theme-toggle" class="theme-btn" onclick="basculerModeNuit()" title="Changer le thème">
            <span class="icon">☾</span> Mode Nuit
        </button>
        <a href="#" class="encart-lien">Langue / Language</a>
        <a href="Deconnexion.html" class="encart-lien">Déconnexion</a>
    `,

    "Institution": `
        <a href="archives.html" class="rubrique-item">
			<div class="rubrique-text">
				<span class="rubrique-title">Documentation</span>
				<p class="rubrique-desc">Accédez à toutes les archives.</p>
			</div>
			<img src="../Contenu-site/doc-icon.png" class="rubrique-img" alt="">
		</a>
		
		<a href="support.html" class="rubrique-item">
			<div class="rubrique-text">
				<span class="rubrique-title">Support Technique</span>
				<p class="rubrique-desc">Une équipe disponible 24/7.</p>
			</div>
			<img src="../Contenu-site/support-icon.png" class="rubrique-img" alt="">
		</a>
    `,
	
	"Présidence": `
		<div class="encart-row">
			<div class="encart-col">
				<h4 style="text-transform:uppercase; font-family: sans-serif;"><span class="txt-rouge">Aujourd'hui</span></h4>
				<a href="President.html" class="rubrique-item">
					<div class="rubrique-text">
						<span class="rubrique-title">Anton Vorne</span>
						<p class="rubrique-desc">Biographie et portrait officiel du 7ème Président du second état.</p>
					</div>
					<img src="../Images/President/Vorne.jpeg" class="rubrique-img" alt="">
				</a>
				
				<a href="Cabinet.html" class="rubrique-item">
					<div class="rubrique-text">
						<span class="rubrique-title">Cabinet du président</span>
						<p class="rubrique-desc">Cercle fermé des fidèles experts du président.</p>
					</div>
					<img src="../Images/President/Cabinet.jpeg" class="rubrique-img" alt="">
				</a>
			</div>
			
			<div class="encart-col">
				<h4 style="text-transform:uppercase; font-family: sans-serif;"><span class="txt-rouge">Hier</span>, un siècle de démocratie</h4>
				<a href="President_old.html" class="encart-lien">Les anciens présidents du second état.</a>
				<a href="Textes.html" class="encart-lien">Les textes fondateurs.</a>
				<a href="Symboles.html" class="encart-lien">Les symboles.</a>
				
				<a href="X" class="rubrique-item">
					<div class="rubrique-text">
						<span class="rubrique-title">Patrimoine</span>
						<p class="rubrique-desc">Histoire des propriétées présidentielles.</p>
					</div>
					<img src="../Images/President/Palais.jpeg" class="rubrique-img" alt="">
				</a>
			</div>
		</div>
    `,
	
	"Actu": `
		<div class="encart-row">
			<div class="encart-col">
				<h4>Mon Compte</h4>
				<a href="X" class="rubrique-item">
					<div class="rubrique-text">
						<span class="rubrique-title">Documentation</span>
						<p class="rubrique-desc">Accédez à toutes les archives.</p>
					</div>
					<img src="../Contenu-site/doc-icon.png" class="rubrique-img" alt="">
				</a>
				
				<a href="X" class="rubrique-item">
					<div class="rubrique-text">
						<span class="rubrique-title">Support Technique</span>
						<p class="rubrique-desc">Une équipe disponible 24/7.</p>
					</div>
					<img src="../Contenu-site/support-icon.png" class="rubrique-img" alt="">
				</a>
			</div>
			
			<div class="encart-col">
				<h4>Mon Compte</h4>
				<a href="X" class="rubrique-item">
					<div class="rubrique-text">
						<span class="rubrique-title">Documentation</span>
						<p class="rubrique-desc">Accédez à toutes les archives.</p>
					</div>
					<img src="../Contenu-site/doc-icon.png" class="rubrique-img" alt="">
				</a>
				
				<a href="X" class="rubrique-item">
					<div class="rubrique-text">
						<span class="rubrique-title">Support Technique</span>
						<p class="rubrique-desc">Une équipe disponible 24/7.</p>
					</div>
					<img src="../Contenu-site/support-icon.png" class="rubrique-img" alt="">
				</a>
			</div>
		</div>
    `,
};

// On lance le chargement dès que le script est lu
document.addEventListener('DOMContentLoaded', chargerMenu);