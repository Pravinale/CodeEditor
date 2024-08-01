import React from 'react';
import LANGUAGE_VERSIONS from '../Languages';

const languages = Object.entries(LANGUAGE_VERSIONS);

const ACTIVE_COLOR = '#3182ce';

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div style={{ marginLeft: '8px', marginBottom: '16px' }}>
      <p style={{ marginBottom: '8px', fontSize: '18px' }}>Select Language:</p>
        <div className='language-list' style={{ display:'flex', background: '#110c1b', marginTop: '8px' }}>
          {languages.map(([lang]) => (
            <div
                key={lang}
                onClick={() => onSelect(lang)}
                style={{
                padding: '8px',
                color: lang === language ? ACTIVE_COLOR : '',
                background: lang === language ? '#1a202c' : 'transparent',
                cursor: 'pointer'
              }}
            >
              {lang}  
            </div>
          ))}
        </div>
    </div>
  );
};

export default LanguageSelector;
