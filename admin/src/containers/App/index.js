// React
import React from 'react';
import styled from 'styled-components';
import { auth, request } from 'strapi-helper-plugin';
// The Editor.js react component src : https://github.com/natterstefan/react-editor-js
import EditorJs from '@natterstefan/react-editor-js';
// THe tools from Editor.js
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Embed from '@editorjs/embed';
import Marker from '@editorjs/marker';
import Delimiter from '@editorjs/delimiter';
import Table from '@editorjs/table';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import ImageTool from '@editorjs/image';

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
        tools={{
          header: {
            class: Header,
            config: {
              defaultLevel: 1
            }
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
              },
            },
          },
          marker: Marker,
          table: {
            class: Table,
            inlineToolbar: true,
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          delimiter: Delimiter,
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: `${strapi.backendURL}/upload`, // Your backend file uploader endpoint
                byUrl: `${strapi.backendURL}/upload`, // Your endpoint that provides uploading by Url
              },
              additionalRequestHeaders: {
                authorization: `Bearer ${auth.getToken()}`,
              },
              uploader: {
                /**
                 * Upload file to the server and return an uploaded image data
                 * @param {File} file - file selected from the device or pasted by drag-n-drop
                 * @return {Promise.<{success, file: {url}}>}
                 */
                uploadByFile(file) {
                  // your own uploading logic here
                  const formData = new FormData();
                  formData.append('files', file);
                  const headers = {};

                  return request('/upload', { method: 'POST', headers, body: formData }, false, false).then(resp => {
                    return {
                      success: 1,
                      file: {
                        url: `${strapi.backendURL}${resp[0].url}`,
                      },
                    };
                  });
                },
              },
            },
          },
        }}
        editorInstance={editorInstance => {
          editor = editorInstance;
        }}
      />
    </Wrapper>
  );
};

export default Editor;
