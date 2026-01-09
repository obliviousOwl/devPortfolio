document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      _gotcha: form._gotcha.value // honeypot
    };

    // Disable button while sending
    const submitButton = form.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
      const response = await fetch("https://formspree.io/f/xgovgyol", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been sent successfully.",
          timer: 3000,
          showConfirmButton: false,
          position: "top",
		  theme: 'dark'
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "There was an error. Please try again.",
          timer: 3000,
          showConfirmButton: false,
          position: "top",
		  theme: 'dark'
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again.",
        timer: 3000,
        showConfirmButton: false,
        position: "top",
		theme: 'dark'
      });
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    }
  });
});
