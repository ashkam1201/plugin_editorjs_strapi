//React
import React from 'react';
//Fonctions React
import {useMemo, useState} from 'react';
//PropTypes
import PropTypes from 'prop-types';
import styled from 'styled-components';
//Composant React-Editor-JS
import EditorJs from 'react-editor-js';
//Tools pour Editor.JS
import {EDITOR_JS_TOOLS} from '../config/config.js';

//Librairie Lodash
const _ = require('lodash');

//Wrapper
const Wrapper = styled.div`
  .editorjs__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;


  const Editor = ({ onChange, name, value }) => {

    //Test Value
    console.log({value});

    const [editor, setEditor] = useState(null)

    //Const permettant la sauvegarde des données émise
    // debounce : garantit que votre code n'est déclenché qu'une seule fois par user input.
    const onSave = _.debounce(async() => {
      try {
        const outputData = await editor.save();
        console.log({outputData})
        const dataString = JSON.stringify(outputData);
        onChange({ target: { name, value: dataString } });
        //Si fonctionne alors les données s'afficheront dans la console
        console.log('Saving data: ' + dataString);
      } catch (e) {
        //Sinon une erreur est retournée
        console.log('Saving failed: ', e);
      }
    }, 200);

    const data = useMemo(() => value ? JSON.parse(value) : {blocks:[]}, [value])

    return (
      <Wrapper>
        //Boutton permettant la sauvegarde des données insérées
        <button style={{backgroundColor:"#007EFF", color:"white", fontFamily:"leto"}} onClick={onSave}>Be my button for life</button>
         //Composant React-Editor.js
          <EditorJs
            tools={EDITOR_JS_TOOLS}
            data={data}
            enableReInitialize={true}
            instanceRef={editorInstance => {
              if(!editor) setEditor(editorInstance);
            }}
       />{value&&<input type={"hidden"} value={value} name={name}/>}
        </Wrapper>
      );
  };

  Editor.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default Editor;

