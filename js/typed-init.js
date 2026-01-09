var typed = new Typed('.typed-text', {
  strings: [
    'Games',
    'Apps',
    'Interactive Experience',
	'Digital tools'
  ],
  typeSpeed: 35,
  backSpeed: 30,
  backDelay: 1500,
  loop: true,
  startDelay: 500,
  onComplete: () => {
    // Select button and fade it in
    const cta = document.getElementById('cta-button');
    cta.classList.remove('opacity-0');
    cta.classList.add('opacity-100');
	const navbar = document.getElementById('navbar');
    navbar.classList.remove('opacity-0');
    navbar.classList.add('opacity-100');
  }
});
