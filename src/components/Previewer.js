import React, { useContext, useEffect } from 'react';
import { MarkdownContext } from './MarkdownContext';
import marked from 'marked';

marked.setOptions({
  breaks: true
});

function Previewer() {
  const {
    markdown,
    previewMaximized,
    setPreviewMaximized,
    editorMaximized
  } = useContext(MarkdownContext);

  const onClick = e => {
    setPreviewMaximized(prevState => !prevState);
  };

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(markdown);
  }, [markdown]);

  return (
    <div
      className={'preview-container' + (previewMaximized ? ' maximized' : '')}
      style={{ display: editorMaximized ? 'none' : '' }}
    >
      <div className={'preview-header'}>
        <h1>Previewer</h1>
        <span className={'open-full'} onClick={onClick}></span>
      </div>
      <div id={'preview'}></div>
    </div>
  );
}

export default Previewer;
