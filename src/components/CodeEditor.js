import React, { useRef, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../Languages';
import OutPut from './OutPut';

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState('');
  const [language, setLanguage] = useState('html');

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ width: '50%' }}>
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </div>
        <OutPut editorRef={editorRef} language={language} />
      </div>
    </div>
  );
};

export default CodeEditor;
