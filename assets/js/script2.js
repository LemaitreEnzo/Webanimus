const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.menu-nav nav ul');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Ajoute ou supprime la classe "show" pour afficher ou masquer les liens de navigation
});