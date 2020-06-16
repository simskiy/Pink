const noJS = document.querySelector(`.no-js`);
noJS.classList.remove(`no-js`);

const btn = document.querySelector(`.main-nav__toggle`);
const closeMenu = document.querySelector(`.main-nav__close`);
const openMenu = document.querySelector(`.main-nav__open`);
const menu = document.querySelector(`.main-nav__list`);
const navTop = document.querySelector(`.main-nav__top`);
const mainNav = document.querySelector(`.main-nav`);

function showMenu() {
  navTop.classList.toggle(`main-nav__top--opacity`);
  closeMenu.classList.toggle(`main-nav__close--hidden`);
  openMenu.classList.toggle(`main-nav__open--hidden`);
  menu.classList.toggle(`main-nav__list--close`);
  menu.classList.toggle(`main-nav__list--open`);
  if (menu.classList.contains(`main-nav__list--close`)) {
    setTimeout(hideMenu, 600);
    mainNav.classList.add(`main-nav--static`);
  } else {
    menu.classList.remove(`main-nav__list--close-hidden`);
    mainNav.classList.add(`main-nav--static`);
  }
}

function hideMenu() {
  menu.classList.add(`main-nav__list--close-hidden`);
}

btn.addEventListener(`click`, showMenu);
