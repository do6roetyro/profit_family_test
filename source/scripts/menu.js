const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.main-header__container--bottom');

const handleMenuButton = () => {
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('close');
    menuButton.classList.toggle('is-active');
  });
};

export default handleMenuButton;
