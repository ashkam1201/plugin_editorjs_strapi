import React from 'react';
import {useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EditorJs from 'react-editor-js';
import tools from '../config/config.js';
const _ = require('lodash');

const Wrapper = styled.div`
  .editorjs__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;


  const Editor = ({ onChange, name, value }) => {
    console.log({value});
    const [editor, setEditor] = useState(null)
    const onSave = async() => {
      try {

        console.log({editor});
        if(!editor) return;
        const outputData = await editor.save();
        console.log({outputData})
        const dataString = JSON.stringify(outputData);
        onChange({ target: { name, value: dataString } });
        console.log('Saving data: ' + dataString);
      } catch (e) {
        console.log('Saving failed: ', e);
      }
    };
;
    const data = useMemo(() => value ? JSON.parse(value) : {blocks:[]}, [value])

    return (
      <Wrapper>
          <EditorJs
            config={tools}
            data={data}
            enableReInitialize={true}
            onChange={onSave}
            onReady={editorInstance => {
              if(!editor) setEditor(editorInstance);
            }}
       />{value&&<input type={"hidden"} value={value} name={name}/>}
        </Wrapper>
      );
  }

  Editor.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default Editor;

