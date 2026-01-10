document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // === Skills Animation ===
	const tlSkills = gsap.timeline({
	scrollTrigger: {
		trigger: "#skills",
		start: "top 80%",
		toggleActions: "play reverse play reverse",
	},
	});

	tlSkills.fromTo(
	".skills-left",
	{ x: -40, opacity: 0 },
	{ x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
	0
	);

	tlSkills.fromTo(
	".skills-right",
	{ x: 40, opacity: 0 },
	{ x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
	0
	);

gsap.from("#contact", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  },
  opacity: 0,
  scale: 0.96,
  duration: 0.5,
  ease: "power2.out"
});

  // === Projects Animation ===
	const tlProjects = gsap.timeline({
	scrollTrigger: {
		trigger: "#projects",
		start: "top 80%",
		toggleActions: "play reverse play reverse",
	},
	});

	tlProjects.from("#projects h2", {
	opacity: 0,
	y: 20,
	duration: 0.4,
	ease: "power2.out"
	});

	tlProjects.from("#projects p", {
	opacity: 0,
	y: 20,
	duration: 0.4,
	ease: "power2.out"
	}, "-=0.25");

	tlProjects.from("#project-carousel", {
	opacity: 0,
	y: 10,
	duration: 0.6,
	ease: "power2.out"
	}, "-=0.1");

});
