import Table from '@editorjs/table';
import Paragraph from '@editorjs/paragraph';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from 'lib/simple-image';
import CodeBox from '@bomdi/codebox';

// These need backend preparation
// import LinkTool from '@editorjs/link';
// import Image from '@editorjs/image';

// security risk
// import Raw from '@editorjs/raw';

// Will be done later
// import Embed from '@editorjs/embed';

export const EDITORJS_TOOLS = {
  // embed: Embed,
  table: Table,
  paragraph: { class: Paragraph, inlineToolbar: true },
  list: List,
  warning: Warning,
  codeBox: { class: CodeBox, config: { useDefaultTheme: 'dark' } },
  // linkTool: LinkTool,
  // image: Image,
  // raw: Raw,
  header: Header,
  quote: {
    class: Quote,
    config: {
      quotePlaceholder: 'Enter a quote',
      captionPlaceholder: "Quote's author",
    },
  },
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};
