document.addEventListener('DOMContentLoaded', () => {
  const themeToggles = [
    document.getElementById('theme-toggle'),
    document.getElementById('theme-toggle-small'),
  ];

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  const getTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || (prefersDark.matches ? 'dark' : 'light');
  };

  const applyTheme = (theme) => {
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(`${theme}-theme`);
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    themeToggles.forEach((toggle) => toggle.setAttribute('data-theme', theme));
    localStorage.setItem('theme', theme);
  };

  const initialTheme = getTheme();
  applyTheme(initialTheme);
  themeToggles.forEach((toggle) => {
    toggle.setAttribute('data-theme', initialTheme);
  });

  themeToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const currentTheme = getTheme();
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
    });
  });

  if (prefersDark.addEventListener) {
    prefersDark.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
});
