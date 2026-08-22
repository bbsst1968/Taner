// VOLLSTÄNDIGE DATEI (script.js)
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Menü umschalten
        nav.classList.toggle('nav-active');

        // Links animieren
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.2}s`;
            }
        });

        // Burger-Icon transformieren
        burger.classList.toggle('toggle');
    });

    // Menü automatisch schließen, wenn ein Link geklickt wird
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(l => l.style.animation = '');
        });
    });
}

navSlide();

// Formular-Dummy
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Anfrage gesendet!');
    this.reset();
});

// Erfordert das kostenlose Paket 'dotenv'
require('dotenv').config();


const passwort = process.env.DB_PASSWORD;
const port = process.env.DB_PORT || 8080;

console.log(`Datenbank-Passwort: ${passwort}`);
console.log(`Datenbank-Port: ${port}`);
