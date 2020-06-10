import React, {
  useContext,
  useEffect,
  useRef
} from 'react';
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
  const editor = useRef();

  const handleClick = () => {
    setPreviewMaximized(prevState => !prevState);
  };

  useEffect(() => {
    editor.current.innerHTML = marked(markdown);
  }, [markdown]);

  return (
    <div
      className={`preview-container ${
        previewMaximized ? 'maximized' : ''
      }`}
      style={{ display: editorMaximized ? 'none' : '' }}
    >
      <div className="preview-header">
        <h1>Previewer</h1>
        <span
          className="open-full"
          onClick={handleClick}
        ></span>
      </div>
      <div id="preview" ref={editor}></div>
    </div>
  );
}

export default Previewer;
