import * as React from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import Highlighter from 'monaco-jsx-highlighter';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';

import styles from './CodeEditor.module.css';
import './syntax.css';

const babelParse = (code: string) =>
  parse(code, {
    sourceType: 'module',
    plugins: ['jsx'],
  });

interface ICodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<ICodeEditorProps> = ({ initialValue, onChange }) => {
  const monacoRef = React.useRef<any>(null);

  const handleEditorDidMount: OnMount = (monacoEditor) => {
    monacoEditor.onDidChangeModelContent(() => {
      onChange(monacoEditor.getValue());
    });

    if (!monacoRef.current) {
      monacoRef.current = monacoEditor;
    }

    const highlighter = new Highlighter(
      // @ts-ignore
      window.monaco,
      babelParse,
      traverse,
      monacoEditor,
    );

    highlighter.highLightOnDidChangeModelContent();
  };

  const onFormatClick = () => {
    const unformattedCode = monacoRef.current.getValue();
    const formattedCode = prettier
      .format(unformattedCode, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        singleQuote: true,
        trailingComma: 'all',
        semi: true,
      })
      .replace(/\n$/, '');

    monacoRef.current.setValue(formattedCode);
  };

  return (
    <div className={styles.editorWrapper}>
      <button
        className={`button ${styles.buttonFormat} is-primary is-small`}
        onClick={onFormatClick}
      >
        Format
      </button>
      <Editor
        onMount={handleEditorDidMount}
        value={initialValue}
        height="100%"
        theme="vs-dark"
        language="javascript"
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default CodeEditor;
