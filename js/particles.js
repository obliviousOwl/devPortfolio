particlesJS("particles-js-hero", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 1000 } },
    color: { value: "#00ffff" },
    shape: {
      type: "circle",
      stroke: { width: 1, color: "#000000" },
      polygon: { nb_sides: 4 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.44093831673801875,
      random: false,
      anim: {
        enable: true,
        speed: 0.9744926547616141,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 4.008530152163807,
      random: true,
      anim: { enable: true, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 176.3753266952075,
      color: "#ffffff",
      opacity: 0.1683582663908799,
      width: 0.4810236182596568
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

particlesJS("particles-js-bg", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 1000 } },
    color: { value: "#00ffff" },
    shape: {
      type: "circle",
      stroke: { width: 1, color: "#000000" },
      polygon: { nb_sides: 4 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.44093831673801875,
      random: false,
      anim: {
        enable: true,
        speed: 0.9744926547616141,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 4.008530152163807,
      random: true,
      anim: {
        enable: true,
        speed: 19.489853095232284,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 176.3753266952075,
      color: "#ffffff",
      opacity: 0.1683582663908799,
      width: 0.4810236182596568
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "grab" },
      onclick: { enable: false, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
