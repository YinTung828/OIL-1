
  function myFunction() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("responsive");
  }

  // Collapse dropdown (slide up) when any nav link is clicked
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#navLinks a");
    const navContainer = document.getElementById("navLinks");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navContainer.classList.contains("responsive")) {
          // Trigger slide-up animation
          navContainer.classList.remove("slide-down");
          navContainer.classList.add("slide-up");

          // Wait for animation to end before hiding
          setTimeout(() => {
            navContainer.classList.remove("responsive");
            navContainer.classList.remove("slide-up");
          }, 300); // match the duration in CSS
        }
      });
    });
  });
