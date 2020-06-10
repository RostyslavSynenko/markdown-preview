import React from 'react';
import './App.css';
import Editor from '../Editor';
import Previewer from '../Previewer';
import { MarkdownProvider } from '../MarkdownContext';

const App = () => {
  return (
    <MarkdownProvider>
      <Editor />
      <Previewer />
    </MarkdownProvider>
  );
};

export default App;
