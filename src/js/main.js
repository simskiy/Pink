const noJS = document.querySelector(`.no-js`);
noJS.classList.remove(`no-js`);

const btn = document.querySelector(`.main-nav__toggle`);
const closeMenu = document.querySelector(`.main-nav__close`);
const openMenu = document.querySelector(`.main-nav__open`);
const menu = document.querySelector(`.main-nav__list`);
const navTop = document.querySelector(`.main-nav__top`);
const mainNav = document.querySelector(`.main-nav`);

const sliderControl = document.querySelectorAll(`.control__item[id^="price_"]`);
const slider = document.querySelector(`.price__table`);

const body = document.body;
const use = document.querySelector(".logoFooter").children[0];

const sliders = {
  "price_1": `slide_1`,
  "price_2": `slide_2`,
  "price_3": `slide_3`,
};

function toggleSlider() {
  const nextSlider = document.querySelector(`#${sliders[this.id]}`);
  slider.style.left = `-${nextSlider.offsetLeft}px`;
}

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

for (const item of sliderControl) {
  item.addEventListener(`click`, toggleSlider);
}

btn.addEventListener(`click`, showMenu);

//--------------------------------------------

window.addEventListener('resize', changeLogoFooter);
window.addEventListener('load', changeLogoFooter);

function changeLogoFooter(event) {

  if (body.clientWidth < 1024) {
    use.attributes[0].value = "img/svg/sprite.svg#logoFooterTablet";
  }
  if (body.clientWidth >= 1024) {
    use.attributes[0].value = "img/svg/sprite.svg#logoFooterDesktop";
  }
}

// --------------------------------------------

const filterLabel = document.querySelectorAll(".filter-img");

for (label of filterLabel) {
  label.addEventListener('click', setActiveInput);
  label.addEventListener('touchstart', setActiveInput);
}

function setActiveInput() {
  const currentActiveLabel = document.querySelector('.filter-img--active');
  const currentActiveInput = document.querySelector('.filter-block__input--active');
  const currentInput = document.querySelector(`#${this.attributes.for.value}`);
  currentActiveLabel.classList.remove('filter-img--active');
  currentActiveInput.classList.remove('filter-block__input--active');
  this.classList.add('filter-img--active');
  currentInput.classList.add('filter-block__input--active');
}

// ------------------------------------------

const btnCancel = document.querySelector('.btn-block__button--cancel');
const filterInput = document.querySelectorAll('.filter-block__input');
btnCancel.addEventListener('click', cancelForm);

function cancelForm(event) {
  event.preventDefault();
  for (input of filterInput) {
    input.value = 50;
  }
}
