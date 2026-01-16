import React, { useState, useEffect } from 'react';
import PinyinChart from './components/PinyinChart';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [language, setLanguage] = useState('urdu');

  // Attempt to fix "hover not working until click" by ensuring window has focus
  useEffect(() => {
    window.focus();
  }, []);

  return (
    <>
      <header>
        <h1>Pinyin Chart</h1>
        <LanguageSelector currentLang={language} onLanguageChange={setLanguage} />
      </header>

      <main className={`lang-${language}`}>
        <PinyinChart language={language} />
      </main>
    </>
  );
}

export default App;
