document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // === Skills Animation ===
  const tlSkills = gsap.timeline({
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
      end: "bottom top",
      toggleActions: "play reverse play reverse",
    },
  });

  tlSkills.fromTo(
    ".skills-left",
    { x: "-100%" },
    { x: "0%", duration: 1, ease: "power3.inOut" },
    0
  );

  tlSkills.fromTo(
    ".skills-right",
    { x: "100%" },
    { x: "0%", duration: 1, ease: "power3.inOut" },
    0
  );

gsap.from("#contact", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play reverse play reverse"
  },
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "elastic.out(1, 0.5)"
});

  // === Projects Animation ===
  const tlProjects = gsap.timeline({
    scrollTrigger: {
      trigger: "#projects",
      start: "top 80%",       // when the top of #projects hits 80% of viewport
      end: "bottom top",      // when bottom of #projects hits top of viewport
      toggleActions: "play reverse play reverse", // animate in & out
    },
  });

  tlProjects.fromTo(
    "#projects h2",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
  );

  tlProjects.fromTo(
    "#projects p",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    "-=0.7" // overlap a bit with the previous animation
  );

  tlProjects.fromTo(
    "#project-carousel",
    { opacity: 0, y: 50, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
    "-=0.6"
  );
});
