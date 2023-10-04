const BURGER = document.querySelector('.mobile-navigation');
console.log(BURGER);
if (BURGER) {
    BURGER.addEventListener('click', ()=>BURGER.classList.toggle('open'));
}