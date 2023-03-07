'use strict';

const header = document.querySelector('.header');
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
    header.style.top = '0';
    header.classList.add('header--filled');
  } else {
    header.style.top = '-100px';
    header.classList.remove('header--filled');
  }
  prevScrollpos = currentScrollPos;
};


// header transparency logic

const headertwo = document.querySelector('.header');

function toggleHeaderClass() {
  if (window.scrollY === 0) {
    header.classList.remove('header--filled');
  } else {
    header.classList.add('header--filled');
  }
}

// Add event listener for scroll
window.addEventListener('scroll', toggleHeaderClass);

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

// scroll disable when hash is menu

window.addEventListener("hashchange", function() {
  if (window.location.hash === "#menu") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

