'use strict';

//header life

function headerVisibility() {
  const header = document.querySelector('header');
  if (!header) {
    console.error('Could not find header element');
    return;
  }

  const headerOffset = header.offsetTop;
  let lastScrollPosition = 0;

  window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 10) {
      // Scrolling down
      header.style.opacity = '0';
      header.style.backgroundColor = 'transparent';
      header.style.zIndex = '3';
      header.style.visibility = 'hidden';
    } else {
      // Scrolling up
      header.style.opacity = '1';
      header.style.zIndex = '1';
      header.style.visibility = 'initial';
      if (currentScrollPosition < headerOffset + 10) {
        header.style.backgroundColor = 'transparent';
      } else {
        header.style.backgroundColor = '#fff';
        header.style.zIndex = '3';
      }
    }

    lastScrollPosition = currentScrollPosition;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  headerVisibility();
});


// reloading page when pressing logo

const headerLogo = document.querySelector('.header__logo');

headerLogo.addEventListener('click', () => {
  location.reload();
});

// Overlay appearing logic

function turnOnOverlay() {
  const opener = document.querySelectorAll('.header__icon--shop, .main-screen__button');
  const overlay = document.querySelector('.overlay');
  const closeButton = document.querySelector('.overlay__button');

  if (opener && overlay && closeButton) {
    opener.forEach(function(button) {
      button.addEventListener('click', function() {
        overlay.classList.add('appear');
      });
    });

    closeButton.addEventListener('click', function() {
      overlay.classList.remove('appear');
    });

    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) {
        overlay.classList.remove('appear');
      }
    });
  }
}

// Call the function to turn on the overlay
turnOnOverlay();

// scroll disable when hash is menu and when overlay is active
// menu

window.addEventListener("hashchange", function() {
  if (window.location.hash === "#menu") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

// overflow

function disableScroll() {
  const page = document.querySelector('.page');
  page.style.overflow = 'hidden';
}

function enableScroll() {
  const page = document.querySelector('.page');
  page.style.overflow = '';
}

const overlay = document.querySelector('.overlay');

overlay.addEventListener('transitionend', function() {
  if (overlay.classList.contains('appear')) {
    disableScroll();
  } else {
    enableScroll();
  }
});

// article 2 life

function addFadeInClass() {
  const textContent = document.querySelector('.for-whom__text-content');
  const textWithPseudo = document.querySelector('.for-whom__title--with-before');
  const pictureOne = document.querySelector('.for-whom__picture-one');

  // calculate the viewport height
  const windowHeight = window.innerHeight;

  // get the bounding rectangles of the elements
  const textContentRect = textContent.getBoundingClientRect();
  const textWithPseudoRect = textWithPseudo.getBoundingClientRect();
  const pictureOneRect = pictureOne.getBoundingClientRect();

  // check if the elements are in view
  if (textContentRect.top < windowHeight && textContentRect.bottom >= 0) {
    textContent.classList.add('for-whom__fade-in');
  }
  if (textWithPseudoRect.top < windowHeight && textWithPseudoRect.bottom >= 0) {
    textWithPseudo.classList.add('for-whom__fade-in');
  }
  if (pictureOneRect.top < windowHeight && pictureOneRect.bottom >= 0) {
    pictureOne.classList.add('for-whom__fade-in');
  }
}

// listen for the scroll event and call the function
window.addEventListener('scroll', addFadeInClass);

