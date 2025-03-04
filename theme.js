/**
 * Theme Switcher
 * Handles switching between light and dark themes
 */

document.addEventListener('DOMContentLoaded', function () {
  // Prevent flash of unstyled content by adding preload class
  document.documentElement.classList.add('preload');

  // Get theme toggle buttons
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleSmall = document.getElementById('theme-toggle-small');

  // Function to handle theme toggle
  function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');

      if (themeToggle) themeToggle.setAttribute('data-theme', 'dark');
      if (themeToggleSmall) themeToggleSmall.setAttribute('data-theme', 'dark');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');

      if (themeToggle) themeToggle.setAttribute('data-theme', 'light');
      if (themeToggleSmall)
        themeToggleSmall.setAttribute('data-theme', 'light');
    }
  }

  // Set initial theme based on localStorage or system preference
  function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.body.classList.add('dark-theme');
      if (themeToggle) themeToggle.setAttribute('data-theme', 'dark');
      if (themeToggleSmall) themeToggleSmall.setAttribute('data-theme', 'dark');
    } else {
      document.body.classList.add('light-theme');
      if (themeToggle) themeToggle.setAttribute('data-theme', 'light');
      if (themeToggleSmall)
        themeToggleSmall.setAttribute('data-theme', 'light');
    }

    // Remove preload class after initial theme is set
    setTimeout(() => {
      document.documentElement.classList.remove('preload');
      if (themeToggle) themeToggle.classList.add('transitions-enabled');
      if (themeToggleSmall)
        themeToggleSmall.classList.add('transitions-enabled');
    }, 100);
  }

  // Add event listeners to theme toggles if they exist
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  if (themeToggleSmall) {
    themeToggleSmall.addEventListener('click', toggleTheme);
  }

  // Listen for system theme changes
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      // Only change theme if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        if (newTheme === 'dark') {
          document.body.classList.remove('light-theme');
          document.body.classList.add('dark-theme');
          if (themeToggle) themeToggle.setAttribute('data-theme', 'dark');
          if (themeToggleSmall)
            themeToggleSmall.setAttribute('data-theme', 'dark');
        } else {
          document.body.classList.remove('dark-theme');
          document.body.classList.add('light-theme');
          if (themeToggle) themeToggle.setAttribute('data-theme', 'light');
          if (themeToggleSmall)
            themeToggleSmall.setAttribute('data-theme', 'light');
        }
      }
    });

  // Set initial theme
  setInitialTheme();
});
