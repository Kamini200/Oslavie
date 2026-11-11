// --- 1. DONNÉES GLOBALES (Accessibles partout) ---

// Vos dessins SVG (Notez l'ajout de la classe map-region-transparent)
const cartesSVG = {
    "nationale": `
        <svg viewBox="0 0 2656 1600">
            
            <image href="../Images/Carte/Carte Oslavie.png" x="0" y="0" width="2656" height="1600" />
            
            <path id="central" class="map-region-transparent" 
                  d="M 1310,757 L 1336,808 L 1384,848 L 1407,882 L 1413,905 L 1427,928 L 1461,934 L 1489,916 L 1538,919 L 1561,899 L 1586,874 L 1609,871 L 1626,817 L 1660,794 L 1672,711 L 1689,683 L 1643,677 L 1615,663 L 1581,663 L 1549,674 L 1507,683 L 1455,685 L 1432,680 L 1398,683 L 1375,723 Z" 
                  onclick="clicZone('central')"/>
            
            <path id="ceinture" class="map-region-transparent" 
                  d="M 1803,568 L 1820,576 L 1846,573 L 1863,588 L 1940,576 L 1960,559 L 1994,559 L 2022,556 L 2037,559 L 2017,588 L 2014,616 L 2020,645 L 1980,665 L 1954,685 L 1954,736 L 1971,756 L 1957,793 L 1945,827 L 1928,850 L 1911,858 L 1894,901 L 1894,938 L 1906,995 L 1925,1013 L 1937,1050 L 1951,1070 L 1951,1095 L 1925,1109 L 1908,1121 L 1911,1149 L 1903,1181 L 1860,1186 L 1834,1167 L 1806,1090 L 1780,1095 L 1752,1118 L 1735,1118 L 1703,1101 L 1683,1112 L 1683,1078 L 1692,1032 L 1678,1021 L 1663,981 L 1666,941 L 1655,913 L 1640,896 L 1626,864 L 1640,821 L 1663,804 L 1678,770 L 1683,724 L 1689,702 L 1709,687 L 1706,662 L 1706,616 L 1717,602 L 1757,588 L 1769,576 Z" 
                  onclick="clicZone('ceinture')"/>
				  
			<path id="terre" class="map-region-transparent" 
                  d="M 1299,761 L 1321,803 L 1336,823 L 1375,852 L 1390,880 L 1398,903 L 1415,932 L 1450,946 L 1489,932 L 1535,926 L 1564,909 L 1581,886 L 1609,875 L 1629,858 L 1635,886 L 1655,915 L 1669,935 L 1663,960 L 1663,983 L 1672,1012 L 1678,1026 L 1689,1034 L 1689,1057 L 1683,1080 L 1683,1111 L 1675,1143 L 1663,1166 L 1643,1171 L 1618,1166 L 1592,1148 L 1541,1146 L 1495,1111 L 1472,1100 L 1441,1091 L 1421,1103 L 1381,1097 L 1364,1111 L 1336,1114 L 1307,1103 L 1247,1086 L 1224,1069 L 1207,1063 L 1196,1043 L 1162,1006 L 1153,974 L 1165,943 L 1153,917 L 1162,880 L 1179,863 L 1190,835 L 1207,829 L 1244,783 L 1284,778 Z" 
                  onclick="clicZone('terre')"/>
				  
			<path id="volyn" class="map-region-transparent" 
                  d="M 2000,345 L 2020,365 L 2085,385 L 2082,428 L 2105,456 L 2134,479 L 2145,502 L 2173,511 L 2142,531 L 2116,528 L 2071,539 L 2048,553 L 2025,545 L 1997,548 L 1971,548 L 1954,548 L 1940,559 L 1908,565 L 1891,570 L 1868,570 L 1849,576 L 1831,576 L 1800,570 L 1774,573 L 1752,593 L 1720,599 L 1706,613 L 1706,656 L 1663,662 L 1643,662 L 1626,647 L 1584,647 L 1566,656 L 1541,662 L 1521,667 L 1501,673 L 1447,673 L 1404,667 L 1387,673 L 1356,670 L 1333,690 L 1318,676 L 1307,667 L 1307,642 L 1293,622 L 1287,588 L 1293,565 L 1296,539 L 1279,513 L 1279,491 L 1290,462 L 1287,431 L 1299,411 L 1290,377 L 1324,377 L 1364,377 L 1395,379 L 1430,377 L 1478,359 L 1501,348 L 1532,348 L 1549,359 L 1572,365 L 1601,365 L 1635,385 L 1672,391 L 1680,422 L 1700,428 L 1749,428 L 1774,416 L 1792,394 L 1814,377 L 1854,365 L 1877,351 L 1908,348 L 1928,354 L 1965,351 Z" 
                  onclick="clicZone('volyn')"/>
				  
			<g id="mar" class="map-region-transparent" >
                  <path d="M 1193,301 L 1233,299 L 1279,321 L 1284,353 L 1290,378 L 1299,407 L 1290,424 L 1290,461 L 1281,487 L 1279,510 L 1293,535 L 1296,558 L 1287,584 L 1290,615 L 1301,641 L 1310,666 L 1330,695 L 1347,681 L 1361,669 L 1390,675 L 1373,698 L 1358,718 L 1336,732 L 1310,739 L 1296,762 L 1281,781 L 1247,781 L 1199,833 L 1190,839 L 1176,867 L 1165,878 L 1159,913 L 1159,947 L 1153,970 L 1153,993 L 1170,1027 L 1193,1044 L 1204,1058 L 1222,1072 L 1247,1084 L 1233,1095 L 1210,1135 L 1190,1152 L 1159,1152 L 1130,1155 L 1113,1175 L 1096,1201 L 1056,1209 L 1002,1175 L 994,1152 L 1011,1112 L 1016,1072 L 1056,1032 L 1033,1004 L 1025,981 L 1051,953 L 1045,930 L 1022,904 L 1016,878 L 1025,850 L 1025,796 L 1036,747 L 1039,713 L 1022,667 L 1005,650 L 1008,642 L 1039,633 L 1033,610 L 1028,585 L 1045,562 L 1045,542 L 1051,519 L 1025,468 L 1028,408 L 1051,391 L 1056,368 L 1039,348 L 1033,319 L 1048,291 L 1065,308 L 1102,308 L 1119,297 L 1136,305 Z" onclick="clicZone('mar')" />
				  <path d="M 845,576 L 860,573 L 880,585 L 894,605 L 880,610 L 871,616 L 851,599 Z" onclick="clicZone('mar')" />
				  <path d="M 806,750 L 820,750 L 837,759 L 828,799 L 811,801 L 806,776 L 794,764 Z" onclick="clicZone('mar')" />
				  <path d="M 814,829 L 823,835 L 817,846 L 814,869 L 808,880 L 788,883 L 783,858 L 783,843 L 797,840 Z" onclick="clicZone('mar')" />
			</g>
			
			<g id="kogan" class="map-region-transparent" >
                  <path d="M 327,1097 L 369,1086 L 389,1091 L 395,1111 L 395,1140 L 407,1151 L 426,1157 L 441,1177 L 452,1200 L 469,1211 L 509,1217 L 521,1234 L 506,1245 L 483,1248 L 469,1260 L 464,1283 L 444,1297 L 429,1305 L 424,1354 L 407,1377 L 389,1394 L 367,1408 L 358,1422 L 344,1437 L 310,1428 L 298,1408 L 301,1377 L 327,1371 L 327,1314 L 315,1302 L 318,1257 L 332,1237 L 332,1197 L 315,1183 L 310,1160 L 298,1143 L 295,1114 Z" onclick="clicZone('kogan')" />
				  <path d="M 173,989 L 190,980 L 218,977 L 238,992 L 236,1012 L 213,1012 L 210,1029 L 179,1037 L 167,1029 L 164,1006 Z" onclick="clicZone('kogan')" />
				  <path d="M 152,1309 L 164,1311 L 173,1325 L 170,1337 L 153,1334 L 153,1322 Z" onclick="clicZone('kogan')" />
				  <path d="M 213,1354 L 224,1357 L 227,1365 L 253,1388 L 241,1399 L 238,1414 L 224,1419 L 221,1405 L 201,1368 Z" onclick="clicZone('kogan')" />
			</g>
        </svg>
    `,

    // Exemple d'une carte régionale (si vous en avez une autre image)
    "reg-nord": `
        <svg viewBox="0 0 800 600">
            <text x="50%" y="50%">Carte du Nord (À faire)</text>
        </svg>
    `
};

const infosZones = {
    "central": {
        titre: "District Central",
        desc: `<i>01-CTR</i> <br><br> <b><u>Préfecture</u></b> - Faellyne <br><br> <b><u>Démographie</u></b> - 8'520'000 habitants <br><br> <b><u>Economie</u></b> - Gestion administrative & stockage stratégique <br><br> <b><u>Géographie</u></b> - Cuvette alluviale ; Sol instable (Marécage asséché). <br> Maintenu par le réseau de pompage Atlas. <br><br> <b><u>Climat</u></b> - Semi-continental humide. Brumes persistantes.`,
        img: "../Images/Carte/Region/District Central.png",
        type: "region"
    },
    "ceinture": {
        titre: "Ceinture Noire",
        desc: `<i>02-CNO</i> <br><br> <b><u>Préfecture</u></b> - Oskograd <br><br> <b><u>Démographie</u></b> - 5'550'000 habitants <br><br> <b><u>Economie</u></b> - Industrie lourde & armement <br><br> <b><u>Géographie</u></b> - Collines basses et rocailleuses ; Sols saturés en minéraux. <br><br> <b><u>Climat</u></b> - Atmosphère lourdement modifiée par les rejets thermiques. Ciel obscurci.`,
		img: "../Images/Carte/Region/Ceinture Noire.png",
        type: "region"
    },
	"terre": {
        titre: "Basses Terres",
        desc: `<i>03-BTR</i> <br><br> <b><u>Préfecture</u></b> - Val Gris <br><br> <b><u>Démographie</u></b> - 3'360'000 habitants <br><br> <b><u>Economie</u></b> - Agriculture de masse <br><br> <b><u>Géographie</u></b> - Plaines continentales ; Vents dominants constants. <br><br> <b><u>Climat</u></b> - Continental extrême (Blizzards hivernaux).`,
		img: "../Images/Carte/Region/Basses Terres.png",
        type: "region"
    },
	"volyn": {
        titre: "Haut Volyn",
        desc: `<i>05-HVO</i> <br><br> <b><u>Préfecture</u></b> - Mura <br><br> <b><u>Démographie</u></b> - 1'230'000 habitants <br><br> <b><u>Economie</u></b> - Autarcie de subsistance, Sylviculture primaire <br><br> <b><u>Géographie</u></b> - Pré-montagnes, ravins profonds. <br><br> <b><u>Climat</u></b> - Montagnard rigoureux. Enneigement précoce.`,
		img: "../Images/Carte/Region/Haut Volyn.png",
        type: "region"
    },
	"mar": {
        titre: "Littoral de Mar",
        desc: `<i>04-LMA</i> <br><br> <b><u>Préfecture</u></b> - Port Vial <br><br> <b><u>Démographie</u></b> - 2'820'000 habitants <br><br> <b><u>Economie</u></b> - Import/Export, Construction navale & Pêche hauturière <br><br> <b><u>Géographie</u></b> - Falaises calcaires abruptes, criques sableuses. Plaine côtière, bocage. <br><br> <b><u>Climat</u></b> - Océanique rude. Vents violents.`,
		img: "../Images/Carte/Region/Littoral de Mar.png",
        type: "region"
    },
	"kogan": {
        titre: "Protectorat de Kogan",
        desc: "<i>21-KOG</i> <br><br> <b><u>Préfecture</u></b> - Port Kogan <br><br> <b><u>Démographie</u></b> - 17'600'000 habitants <br><br> <b><u>Economie</u></b> - Extraction primaire (Bauxite, Caoutchouc) <br><br> <b><u>Géographie</u></b> - Péninsule tropicale convertie en île artificielle par ingénierie d'État. <br><br> <b><u>Climat</u></b> - Équatorial. Humidité extrême.",
        type: "region"
    }
};

// Variables d'état
let regionActuelle = null; 


// --- 2. LES FONCTIONS GLOBALES (Pour que le HTML puisse les appeler) ---

// Fonction A : Charger le SVG
function chargerCarte(nomCarte) {
    const container = document.getElementById('map-container');
    const btnDezoom = document.getElementById('btn-dezoom');

    if (cartesSVG[nomCarte] && container) {
        container.innerHTML = cartesSVG[nomCarte];
        
        // Gestion du bouton retour
        if (btnDezoom) {
            if (nomCarte === "nationale") {
                btnDezoom.classList.add('hidden');
            } else {
                btnDezoom.classList.remove('hidden');
            }
        }
    } else {
        console.error("Carte introuvable ou conteneur manquant : " + nomCarte);
    }
}

// Fonction B : Clic sur une zone
function clicZone(id) {
    const info = infosZones[id];
    const panel = document.getElementById('map-panel');
    const btnZoom = document.getElementById('btn-zoom-region');

    if (info && panel) {
        // Remplissage
        document.getElementById('panel-title').innerText = info.titre;
        document.getElementById('panel-desc').innerHTML = info.desc;
        
        const imgEl = document.getElementById('panel-img');
        if (info.img) {
            imgEl.src = info.img;
            imgEl.classList.remove('hidden');
        } else {
            imgEl.classList.add('hidden');
        }

        // Gestion du bouton Zoom
        if (info.type === 'region') {
            btnZoom.classList.remove('hidden');
            regionActuelle = id; 
        } else {
            btnZoom.classList.add('hidden');
            regionActuelle = null;
        }

        // Ouverture
        panel.classList.add('panel-open');
    }
}

// Fonction C : Fermer le volet
function fermerPanel() {
    const panel = document.getElementById('map-panel');
    if(panel) {
        panel.classList.remove('panel-open');
        panel.classList.remove('panel-large');
    }
}

// Fonction D : Agrandir le volet
function agrandirPanel() {
    const panel = document.getElementById('map-panel');
    if(panel) panel.classList.toggle('panel-large');
}

// Fonction E : Retour à la nationale
function retourNationale() {
    chargerCarte("nationale");
    fermerPanel();
}


// --- 3. INITIALISATION (Une fois que la page est chargée) ---
document.addEventListener('DOMContentLoaded', () => {
    
    // On lance la première carte
    chargerCarte("nationale");

    // On attache l'écouteur pour le bouton zoom du panel
    // (Car ce bouton existe déjà dans le HTML, pas besoin de fonction globale ici)
    const btnZoom = document.getElementById('btn-zoom-region');
    if(btnZoom) {
        btnZoom.addEventListener('click', () => {
            if (regionActuelle && cartesSVG[regionActuelle]) {
                chargerCarte(regionActuelle);
                fermerPanel();
            } else {
                alert("Carte détaillée non disponible.");
            }
        });
    }
});