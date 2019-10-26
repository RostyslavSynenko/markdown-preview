import React, { useContext, useEffect } from 'react';
import { MarkdownContext } from './MarkdownContext';
import marked from 'marked';

function Previewer() {
  const { markdown } = useContext(MarkdownContext);

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(markdown);
  }, [markdown]);

  return (
    <div className={'preview-container'}>
      <div className={'preview-header'}>
        <h1>Previewer</h1>
        <span className={'open-full'}></span>
      </div>
      <div id={'preview'}></div>
    </div>
  );
}

export default Previewer;
