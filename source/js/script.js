var navMain = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggle');
var goodsOrder = document.querySelector('.goods-of-the-week__order');
var productBasket = document.querySelector('.product-card__icon');
var modalAddtobasket = document.querySelector('.add-to-basket');
var overlay = document.querySelector('.overlay');


navMain.classList.remove('main-navigation--no-js');

navToggle.addEventListener('click', function(evt) {

  evt.preventDefault();

  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});

goodsOrder.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalAddtobasket.classList.add('add-to-basket--opened');
  overlay.classList.add('overlay--opened');
});

overlay.addEventListener('click', function (evt) {
  modalAddtobasket.classList.remove('add-to-basket--opened');
  overlay.classList.remove('overlay--opened');
});
