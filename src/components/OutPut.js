import React, { useState } from 'react';
import { executeCode } from '../api';

const OutPut = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    if (language === 'html') {
      // Render HTML directly
      setOutput(sourceCode);
    } else {
      try {
        setIsLoading(true);
        const { run: result } = await executeCode(language, sourceCode);
        setOutput(result.output);
      } catch (error) {
          console.error('An error occurred:', error.message || 'Unable to run code')
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div style={{ width: '50%' }}>
      <p style={{ margin: '8px', fontSize: '18px' }}>Output</p>
      <button
        onClick={runCode}
        style={{
          padding: '8px 16px',
          marginBottom: '16px',
          border: '1px solid green',
          borderRadius: '4px',
          backgroundColor: 'transparent',
          color: 'green',
          cursor: 'pointer',
        }}
        disabled={isLoading}
      >
        {isLoading ? 'Running...' : 'Run Code'}
      </button>
      <div
        style={{
          height: '75vh',
          padding: '16px',
          border: '1px solid #333',
          borderRadius: '4px',
          backgroundColor: '#f7fafc',
          overflowY: 'auto',
        }}
      >
        {language === 'html' ? (
          <div dangerouslySetInnerHTML={{ __html: output }} />
        ) : (
          output ? output : ''
        )}
      </div>
    </div>
  );
};

export default OutPut;
