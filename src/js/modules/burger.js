const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const body = document.querySelector('body')

const toggleMenu = (e) => {
  if (e.target.closest('.header__burger')) {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
  }
}

document.addEventListener('click', toggleMenu)