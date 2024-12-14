import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // قراءة الوضع الليلي من التخزين المحلي (localStorage) عند بدء التطبيق
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    // تحديث التخزين المحلي بناءً على تغييرات الوضع الليلي
    localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));

    // إضافة أو إزالة فئة الوضع الليلي من العنصر `<body>`
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
