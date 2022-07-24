window.onload = function () {
  const selectElement = (element) => document.querySelector(element);

  const openNav = selectElement(".open-nav-mobile");
  const closeNav = selectElement(".close-mobile");
  const menu = selectElement(".menu-mobile");
  const over = selectElement(".over");

  if (openNav) {
    openNav.onclick = () => {
      menu.classList.add("open-mobile")
      over.classList.add("overlay")
      menu.classList.remove("close-nav-mobile")
    };
    closeNav.onclick = () => {
      menu.classList.remove("open-mobile")
      over.classList.remove("overlay")
      menu.classList.add("close-nav-mobile")
    };

    over.onclick = () => {
      menu.classList.remove("open-mobile")
      over.classList.remove("overlay")
      menu.classList.add("close-nav-mobile")
    };
  }



  //  scroll to top

  const backToTop = selectElement(".back-to-top");
  const header = selectElement(".header");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTop.classList.add('show-back');
      header.classList.add('fixed-header');
    } else {
      backToTop.classList.remove('show-back');
      header.classList.remove('fixed-header');
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  backToTop.onclick = function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }




  const customerClass = selectElement(".customer");


  //  sliders
  const customer = new Swiper(".customer", {
    slidesPerView: 3,
    loop: true,
    lazy: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
        centeredSlides: true,
      },
    },
  });
  const intro = new Swiper(".intro-slider", {
    slidesPerView: 1,
    loop: true,
    lazy: true,
    effect: 'fade',
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-intro-next",
      prevEl: ".swiper-intro-prev",
    },
  });

}