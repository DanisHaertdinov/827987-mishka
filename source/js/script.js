var navMain = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggle');
var goodsOrder = document.querySelector('.goods-of-the-week__order');
var productBasket = document.querySelectorAll('.product-card__icon');
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

if (goodsOrder) {
  goodsOrder.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalAddtobasket.classList.add('add-to-basket--opened');
    overlay.classList.add('overlay--opened');
  });
}

overlay.addEventListener('click', function (evt) {
  modalAddtobasket.classList.remove('add-to-basket--opened');
  overlay.classList.remove('overlay--opened');
});

for (var i = 0; i < productBasket.length; i++) {
  productBasket[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modalAddtobasket.classList.add('add-to-basket--opened');
    overlay.classList.add('overlay--opened');
  });
}

window.addEventListener('keydown', function(evt){
  if (evt.keyCode === 27) {
    if (modalAddtobasket.classList.contains('add-to-basket--opened') || overlay.classList.contains('overlay--opened'))  {
      evt.preventDefault();
      modalAddtobasket.classList.remove('add-to-basket--opened');
      overlay.classList.remove('overlay--opened');
    }
  }
});
