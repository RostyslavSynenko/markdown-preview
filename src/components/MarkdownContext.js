import React, { useState, createContext } from 'react';

import { editorPlaceholder } from '../config';

export const MarkdownContext = createContext();

export const MarkdownProvider = ({ children }) => {
  const [markdown, setMarkdown] = useState(
    editorPlaceholder
  );

  const [editorMaximized, setEditorMaximized] = useState(
    false
  );
  const [previewMaximized, setPreviewMaximized] = useState(
    false
  );

  return (
    <MarkdownContext.Provider
      value={{
        markdown,
        setMarkdown,
        editorMaximized,
        setEditorMaximized,
        previewMaximized,
        setPreviewMaximized
      }}
    >
      {children}
    </MarkdownContext.Provider>
  );
};
