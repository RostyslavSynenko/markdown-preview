import React, { useContext } from 'react';
import { MarkdownContext } from './MarkdownContext';

const Editor = () => {
  const {
    markdown,
    setMarkdown,
    editorMaximized,
    setEditorMaximized,
    previewMaximized
  } = useContext(MarkdownContext);

  const handleChange = event => {
    const { value } = event.target;

    setMarkdown(value);
  };

  const handleClick = () => {
    setEditorMaximized(prevState => !prevState);
  };

  return (
    <div
      className={`editor-container ${
        editorMaximized ? ' maximized' : ''
      }`}
      style={{ display: previewMaximized ? 'none' : '' }}
    >
      <div className="edit-header">
        <h1>Editor</h1>
        <span
          className="open-full"
          onClick={handleClick}
        ></span>
      </div>
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
      />
    </div>
  );
};

export default Editor;
