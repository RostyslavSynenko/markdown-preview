import React from 'react';
import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { MarkdownProvider } from './components/MarkdownContext';

function App() {
  return (
    <MarkdownProvider>
      <Editor />
      <Previewer />
    </MarkdownProvider>
  );
}

export default App;
