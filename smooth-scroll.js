document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          document.querySelector('.navbar-toggler').click();
        }

        // Get navbar height to use as offset
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 70;

        // Use a smaller offset to show more of the section when scrolling to it
        const scrollOffset = navbarHeight + 5;

        // Scroll to the target section
        window.scrollTo({
          top: targetElement.offsetTop - scrollOffset,
          behavior: 'smooth',
        });

        // Update active link
        document.querySelectorAll('.nav-link').forEach((link) => {
          link.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });
});
