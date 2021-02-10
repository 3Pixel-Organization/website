import React from 'react';
import EditorJs from 'react-editor-js';

import 'modules/common/components/ContentEditor/editorjs.dark.css';
import classes from 'modules/common/components/ContentEditor/styles.module.css';
import { EDITORJS_TOOLS } from 'modules/common/components/ContentEditor/EditorJSTools';

export const ContentEditor = ({ data, onChange, onBlur = () => {} }) => (
  <div className={classes.ContentEditor} onBlur={onBlur}>
    <EditorJs data={data} onChange={onChange} tools={EDITORJS_TOOLS} />
  </div>
);
