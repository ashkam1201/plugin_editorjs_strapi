import React from 'react';
import {useMemo} from 'react';
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

  const Editor = ({ onChange, name, value, ...props }) => {
    let editor = null;
console.log(props);
    const onSave = _.debounce(()   => {
      try {
        const outputData = await editor.save();
        const dataString = JSON.stringify(outputData);
        onChange({target: {name, value: dataString}});
        console.log('Saving data: ' + dataString);
      } catch (e) {
        console.log('Saving failed: ', e);
      }
    },32);

    const data = useMemo(() => value ? JSON.parse(value) : {}, [value])

    return (
       <Wrapper>
          <EditorJs
            config={tools}
            data={data}
            enableReInitialize={true}
            onChange={onSave}
            editorInstance={editorInstance => {
              editor = editorInstance;
            }}
       />
        </Wrapper>
      );
  }

  Editor.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default Editor;

