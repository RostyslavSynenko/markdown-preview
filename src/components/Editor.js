import React, { useContext } from 'react';
import { MarkdownContext } from './MarkdownContext';

function Editor() {
  const { markdown, setMarkdown } = useContext(MarkdownContext);

  const onChange = e => {
    const { value } = e.target;

    setMarkdown(value);
  };

  return (
    <div className={'editor-container'}>
      <div className={'edit-header'}>
        <h1>Editor</h1>
        <span className={'open-full'}></span>
      </div>
      <textarea id={'editor'} value={markdown} onChange={onChange} />
    </div>
  );
}

export default Editor;
