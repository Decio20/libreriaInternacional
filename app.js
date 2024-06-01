const abrir = document.querySelector('#abrir-hamburguer');
const navHamburger = document.querySelector('#lista-hamburguer');
const cerrar = document.querySelector('#cerrar-hamburguer');

abrir.addEventListener('click', function(){
    navHamburger.classList.add('visible');
});

cerrar.addEventListener('click', function(){
    navHamburger.classList.remove('visible');
});