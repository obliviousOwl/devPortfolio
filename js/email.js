document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("RtOrQEXvjXKklOQ3W");

  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const recaptcha = grecaptcha.getResponse();
    if (!recaptcha) {
      alert("Please verify that you are not a robot.");
      return;
    }

    emailjs.sendForm(
      "service_xba6sls",
      "template_hs3mwqf",
      this
    ).then(() => {
      alert("Message sent successfully!");
      form.reset();
      grecaptcha.reset();
    }).catch((err) => {
      console.error("EmailJS error:", err);
      alert("Something went wrong. Please try again.");
    });
  });
});
