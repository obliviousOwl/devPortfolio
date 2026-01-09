// nav-highlight.js

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#navbar a');
  const navbar = document.getElementById('navbar');
  const homeSection = document.getElementById('home');

  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('overlay');

  // Open
  menuToggle.addEventListener('click', () => {
	mobileMenu.classList.remove('-translate-x-full');
	overlay.classList.remove('hidden');
  });

// Close

  closeMenu.addEventListener('click', () => {
	mobileMenu.classList.add('-translate-x-full');
	overlay.classList.add('hidden');
  });

// Close if overlay clicked
overlay.addEventListener('click', () => {
  mobileMenu.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
});



  let navbarManuallyShown = false; // tracks if navbar was shown early due to scroll

  window.addEventListener('scroll', () => {
    let current = '';

    // Highlight active section
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-[#FF5733]', 'font-semibold');
      const href = link.getAttribute('href').substring(1);
      if (href === current) {
        link.classList.add('text-[#FF5733]', 'font-semibold');
      }
    });

    const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
    if (window.scrollY > homeBottom - 100 && !navbarManuallyShown) {
      navbar.classList.remove('opacity-0');
      navbar.classList.add('opacity-100');
      navbarManuallyShown = true;
    }
  });
});
