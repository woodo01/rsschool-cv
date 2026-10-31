// Adaptive menu
const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('nav');
const navList = document.querySelector('nav ul');
const navItems = document.querySelectorAll('nav li');

function switchMenu() {
    toggleBtn.classList.toggle('collapsed');
    nav.classList.toggle('collapsed');
    navList.classList.toggle('collapsed');
}
toggleBtn.addEventListener('click', switchMenu);

function closeMenu() {
    toggleBtn.classList.remove('collapsed');
    nav.classList.remove('collapsed');
    navList.classList.remove('collapsed');
}
navItems.forEach(el => el.addEventListener('click', closeMenu));
