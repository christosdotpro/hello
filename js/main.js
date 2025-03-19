// Form handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  const notification = document.createElement("div");
  notification.className =
    "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 translate-y-0";
  notification.textContent =
    "Message sent successfully! I'll get back to you soon.";
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.transform = "translateY(-150%)";
    setTimeout(() => notification.remove(), 300);
  }, 3000);

  this.reset();
});

// Navbar scroll behavior
const header = document.querySelector("nav");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    header.classList.remove("shadow-lg");
    return;
  }

  if (currentScroll > lastScroll) {
    header.classList.add("shadow-lg");
  } else {
    header.classList.remove("shadow-lg");
  }
  lastScroll = currentScroll;
}); 