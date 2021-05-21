// React
import React from 'react';
import styled from 'styled-components';
// The Editor.js react component src : https://github.com/natterstefan/react-editor-js
import EditorJs from '@natterstefan/react-editor-js';
import tools from './config.js'

const Wrapper = styled.div`
  .editorjs__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const Editor = () => {
  var editor = null;

  const onSave = async () => {
    // https://editorjs.io/saving-data
    try {
      const outputData = await editor.save()
      console.log('Article data: ', outputData)
    } catch (e) {
      console.log('Saving failed: ', e)
    }
  }

  const onReady = () => {
    // https://editorjs.io/configuration#editor-modifications-callback
    console.log('Editor.js is ready to work!')
  }

  const onChange = () => {
    // https://editorjs.io/configuration#editor-modifications-callback
    console.log("Now I know that Editor's content changed!")
  }


  return (
    <Wrapper>

      <button onClick={onSave}>Save</button>

      <EditorJs
        onReady={onReady}
        onChange={onChange}
        tools={tools}
        editorInstance={editorInstance => {
          editor = editorInstance;
        }}
      />
          </Wrapper>
          );

      export Editor