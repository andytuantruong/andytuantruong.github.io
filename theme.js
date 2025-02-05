document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('preload');
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
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    themeToggles.forEach((toggle) => toggle.setAttribute('data-theme', theme));
    localStorage.setItem('theme', theme);
  };

  applyTheme(getTheme());

  // preload for flash prevention
  setTimeout(() => {
    document.body.classList.remove('preload');
    themeToggles.forEach((toggle) =>
      toggle.classList.add('transitions-enabled')
    );
  }, 100);

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
