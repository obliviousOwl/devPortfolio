document.addEventListener("DOMContentLoaded", () => {
  if (!window.emailjs) {
    console.error("EmailJS not loaded");
    return;
  }

  emailjs.init("RtOrQEXvjXKklOQ3W");

  const form = document.querySelector("#contact-form");
  if (!form) {
    console.error("Contact form not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Make reCAPTCHA optional-safe
    if (typeof grecaptcha !== "undefined") {
      const recaptcha = grecaptcha.getResponse();
      if (!recaptcha) {
        alert("Please verify that you are not a robot.");
        return;
      }
    }

    emailjs
      .sendForm("service_xba6sls", "template_hs3mwqf", this)
      .then(() => {
        alert("Message sent successfully!");
        form.reset();

        if (typeof grecaptcha !== "undefined") {
          grecaptcha.reset();
        }
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        alert("Something went wrong. Please try again.");
      });
  });
});
