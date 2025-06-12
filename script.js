const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("Added to cart!");
      });
    });

    // Application form validation and submission
    const applicationForm = document.getElementById("application-form");
    applicationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!applicationForm.reportValidity()) {
        return;
      }
      alert("Application submitted successfully!");
      applicationForm.reset();
    });

    // Contact form submission
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!contactForm.reportValidity()) {
        return;
      }
      alert("Message sent successfully!");
      contactForm.reset();
    });