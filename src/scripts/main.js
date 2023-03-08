'use strict';

function handleHeaderScroll() {
  const header = document.querySelector('header');
  const scrollTop = window.scrollY;

  if (scrollTop > 0) {
    header.classList.add('header--filled');
  } else {
    header.classList.remove('header--filled');
  }
}

window.addEventListener('scroll', handleHeaderScroll);

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




