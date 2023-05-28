import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const [mode, setMode] = useState('');

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  useEffect(() => {
    const userPref = window.localStorage.getItem('theme');
    const defaultMode =
      userPref ||
      (window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light');

    setMode(defaultMode);
    applyTheme(defaultMode);
  }, []);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    window.localStorage.setItem('theme', newMode);
    applyTheme(newMode);
  };

  return { mode, toggleTheme };
};

export default useThemeSwitcher;
