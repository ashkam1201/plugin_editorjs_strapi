import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Embed from '@editorjs/embed';
import Marker from '@editorjs/marker';
import Delimiter from '@editorjs/delimiter';
import Table from '@editorjs/table';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import ImageTool from '@editorjs/image';

const tools = {
  header: {
    class: Header,
    config: {
      defaultLevel: 1,
    },
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
  // image: {
  //   class: ImageTool,
  //   config: {
  //     endpoints: {
  //       byFile: `${strapi.backendURL}/upload`, // Your backend file uploader endpoint
  //       byUrl: `${strapi.backendURL}/upload`, // Your endpoint that provides uploading by Url
  //     },
  //     additionalRequestHeaders: {
  //       authorization: `Bearer ${auth.getToken()}`,
  //     },
  //     uploader: {
  //       /**
  //        * Upload file to the server and return an uploaded image data
  //        * @param {File} file - file selected from the device or pasted by drag-n-drop
  //        * @return {Promise.<{success, file: {url}}>}
  //        */
  //       uploadByFile(file) {
  //         // your own uploading logic here
  //         const formData = new FormData();
  //         formData.append("files", file);
  //         const headers = {};

  //         return request(
  //           "/upload",
  //           { method: "POST", headers, body: formData },
  //           false,
  //           false
  //         ).then((resp) => {
  //           return {
  //             success: 1,
  //             file: {
  //               url: `${strapi.backendURL}${resp[0].url}`,
  //             },
  //           };
  //         });
  //       },
  //     },
  //   },
  // },
};

export { tools };
