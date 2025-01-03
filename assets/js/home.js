let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');;
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".shop-slider", {
    loop: true,
    // slidesPerView: 20,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteration: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop: true,
    // slidesPerView: 20,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteration: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });