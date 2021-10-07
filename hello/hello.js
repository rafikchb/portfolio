let burger = document.getElementById('burger');
let navMenu = document.getElementById('navMenu');
burger.addEventListener('click', () => {
    if (navMenu.classList.contains('hidden')) {
        navMenu.classList.remove('hidden');
        burger.classList.remove('open');
        burger.classList.add('close');



    } else {
        navMenu.classList.add('hidden');

        burger.classList.remove('close');
        burger.classList.add('open');
    }
});