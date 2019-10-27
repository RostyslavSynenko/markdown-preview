import React, { useContext } from 'react';
import { MarkdownContext } from './MarkdownContext';

function Editor() {
  const {
    markdown,
    setMarkdown,
    editorMaximized,
    setEditorMaximized,
    previewMaximized
  } = useContext(MarkdownContext);

  const onChange = e => {
    const { value } = e.target;

    setMarkdown(value);
  };

  const onClick = e => {
    setEditorMaximized(prevState => !prevState);
  };

  return (
    <div
      className={'editor-container' + (editorMaximized ? ' maximized' : '')}
      style={{ display: previewMaximized ? 'none' : '' }}
    >
      <div className={'edit-header'}>
        <h1>Editor</h1>
        <span className={'open-full'} onClick={onClick}></span>
      </div>
      <textarea id={'editor'} value={markdown} onChange={onChange} />
    </div>
  );
}

export default Editor;
