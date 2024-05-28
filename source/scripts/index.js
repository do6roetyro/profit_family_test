// -- Меню навигации на мобилке.
const menu = document.querySelector('.main-nav__list');
const buttonMenu = document.querySelector('.main-nav__button-menu');
const logo = document.querySelector('.main-nav__logo-link');
const map = document.querySelector('.location__map');

buttonMenu.onclick = function () {
  menu.classList.toggle('main-nav__list--close');
  buttonMenu.classList.toggle('main-nav__button-menu--cross');
  logo.classList.toggle('main-nav__logo-link--close');
};

// -- nojs реализация.
menu.classList.remove('main-nav__list--noscript');
map?.classList.remove('location__map--nojs');
buttonMenu.classList.remove('main-nav__button-menu--noscript');
// logo.classList.add("main-nav__logo--closed-menu");
