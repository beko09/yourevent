const selectElement = (element) => document.querySelector(element);

const openNav = selectElement(".open-nav-mobile");
const closeNav = selectElement(".close-mobile");
const openAside = selectElement(".open-aside");
const closeAside = selectElement(".close-aside");
const menu = selectElement(".menu-mobile");
const aside = selectElement(".aside");
const over = selectElement(".over");
const overAside = selectElement(".over-aside");

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
if (openAside) {
  openAside.onclick = () => {
    aside.classList.add("c-open-aside")
    overAside.classList.add("overlay-aside")
    aside.classList.remove("c-close-aside")
  };
  closeAside.onclick = () => {
    aside.classList.remove("c-open-aside")
    overAside.classList.remove("overlay-aside")
    aside.classList.add("c-close-aside")
  };

  overAside.onclick = () => {
    aside.classList.remove("c-open-aside")
    overAside.classList.remove("overlay-aside")
    aside.classList.add("c-close-aside")
  };
}

//  speed contact

const openSpeed = selectElement(".open-speed");
const closeSpeed = selectElement(".close-speed");
const speedBody = selectElement(".speed-contact-body");
if (openSpeed) {
  openSpeed.onclick = () => {
    openSpeed.classList.add("hidden")
    closeSpeed.classList.remove("hidden")
    speedBody.classList.remove("invisible")
    speedBody.classList.remove("opacity-0")
  };
  closeSpeed.onclick = () => {
    closeSpeed.classList.add("hidden")
    openSpeed.classList.remove("hidden")
    speedBody.classList.add("invisible")
    speedBody.classList.add("opacity-0")
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


const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
  header.addEventListener("click", function () {
    const accordionContent = header.parentElement.querySelector(".accordion-content");
    let accordionMaxHeight = accordionContent.style.maxHeight;

    // Condition handling
    if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
      accordionContent.style.display = 'block';
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
      header.querySelector(".fas").classList.remove("fa-plus");
      header.querySelector(".fas").classList.add("fa-minus");
      header.classList.add("bg-primary");
      header.classList.add("text-white");
      header.parentElement.classList.add("bg-white");
    } else {
      accordionContent.style.maxHeight = `0px`;
      accordionContent.style.display = 'none';
      header.querySelector(".fas").classList.add("fa-plus");
      header.querySelector(".fas").classList.remove("fa-minus");
      header.classList.remove("bg-primary");
      header.classList.remove("text-white");
      header.parentElement.classList.remove("bg-white");
    }
  });
});


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