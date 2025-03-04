document.addEventListener('DOMContentLoaded', function () {
  function updateActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 70;

    let currentSection = '';

    sections.forEach((section) => {
      const sectionId = section.getAttribute('id');
      const rect = section.getBoundingClientRect();

      // Determine active section for navigation only
      // A section is active when its top is near or above the viewport top
      // and its bottom is still in the viewport
      if (rect.top <= navbarHeight + 50 && rect.bottom >= navbarHeight) {
        currentSection = sectionId;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
  // Listen for scroll events (only for updating active navigation)
  window.addEventListener('scroll', updateActiveSection);

  // Initial call to set active section
  updateActiveSection();
});
