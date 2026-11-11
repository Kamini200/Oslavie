document.addEventListener('DOMContentLoaded', () => {
    const footerElement = document.getElementById('site-footer');

    if (footerElement) {
        footerElement.innerHTML = `
            <div class="footer-content">
                
                <div class="footer-col footer-logo-section">
                    <img src="../Images/Logoslavie.png" alt="Logoslavie" class="footer-logo">
                    <p class="footer-slogan">"La liberté naît du devoir accompli,<br> la prospérité de l'effort commun."</p>
                </div>

                <div class="footer-col">
                    <h4>Ministère de l'information</h4>
                    <p>"Le Prisme" Palais des Communications</p>
                    <p>Rond-Point du Signal, Seconde Ceinture</p>
                    <p>Oslavie - Faellyne</p>
                    <br>
                    <p><strong>Email :</strong> contact@cabinet-etat.os</p>
                    <p><strong>Tel :</strong> +XX 100 035 26</p>
                </div>

                <div class="footer-col">
                    <h4>Liens Utiles</h4>
                    <ul class="footer-links">
                        <li><a href="mentions-legales.html">Mentions Légales</a></li>
                        <li><a href="plan-du-site.html">Plan du Site</a></li>
                        <li><a href="presse.html">Espace Presse</a></li>
                        <li><a href="recrutement.html">Carrières & Stages</a></li>
                    </ul>
                </div>

            </div>
            
            <div class="footer-bottom">
                &copy; 2026 Etat d'Oslavie - Tous droits réservés.
            </div>
        `;
    }
});