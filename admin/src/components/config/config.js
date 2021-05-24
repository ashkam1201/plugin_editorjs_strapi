import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Embed from '@editorjs/embed';
import Marker from '@editorjs/marker';
import Delimiter from '@editorjs/delimiter';
import Table from '@editorjs/table';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';

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
};

export default { tools };
