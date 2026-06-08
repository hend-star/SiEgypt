const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  const status = contactForm.querySelector("[data-form-status]");

  const validators = {
    "full-name": (value) => value.trim().length >= 2 || "Please enter your full name.",
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || "Please enter a valid email address.",
    phone: (value) => value.replace(/\D/g, "").length >= 8 || "Please enter a valid phone number.",
    service: (value) => value.trim() !== "" || "Please select a service.",
    message: (value) => value.trim().length >= 10 || "Please add a short message."
  };

  const setError = (field, message) => {
    const row = field.closest(".form-row");
    const error = contactForm.querySelector(`[data-error-for="${field.id}"]`);

    if (message) {
      row?.classList.add("has-error");
      field.setAttribute("aria-invalid", "true");
      if (error) error.textContent = message;
      return;
    }

    row?.classList.remove("has-error");
    field.removeAttribute("aria-invalid");
    if (error) error.textContent = "";
  };

  const validateField = (field) => {
    const validator = validators[field.id];
    if (!validator) return true;

    const result = validator(field.value);
    if (result === true) {
      setError(field, "");
      return true;
    }

    setError(field, result);
    return false;
  };

  contactForm.addEventListener("input", (event) => {
    if (event.target.matches("input, select, textarea")) {
      validateField(event.target);
      if (status) status.textContent = "";
    }
  });

  contactForm.addEventListener("submit", (event) => {
    const fields = Array.from(contactForm.querySelectorAll("input, select, textarea"));
    const requiredFields = fields.filter((field) => field.required);
    const validationResults = requiredFields.map(validateField);
    const isValid = validationResults.every(Boolean);

    if (!isValid) {
      event.preventDefault();
      status.textContent = "Please check the highlighted fields and try again.";
      status.style.color = "var(--red)";
      return;
    }

    if (status) {
      status.textContent = "Opening your email app to send the enquiry.";
      status.style.color = "var(--green)";
    }
  });
}
