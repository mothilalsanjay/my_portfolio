import React, { useState } from 'react';


const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <header className="header">
        <button onClick={toggleTheme} className="theme-toggle-btn">
           {isDarkTheme ? 'White' : 'Black'}
        </button>
      </header>
    </div>
  );
};

export default App;
