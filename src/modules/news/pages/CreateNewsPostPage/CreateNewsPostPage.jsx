import React from 'react';

import {
  Card,
  ContentEditor,
  Hero,
  Page,
  TextInput,
  TextArea,
  Button,
} from 'modules/common/components';
import classes from 'modules/news/pages/CreateNewsPostPage/styles.module.css';

export const CreateNewsPostPage = () => {
  const content = {
    time: 1612917940264,
    blocks: [
      { type: 'header', data: { text: 'Hello GameDev World', level: 1 } },
      {
        type: 'simpleImage',
        data: {
          url: 'https://p.favim.com/orig/2019/03/02/anime-night-sky-Favim.com-6969426.png',
          caption: "It's showtime.",
          withBorder: false,
          withBackground: false,
          stretched: false,
        },
      },
      { type: 'header', data: { text: 'This is where it all starts.', level: 2 } },
      {
        type: 'paragraph',
        data: { text: 'With this post we enter a new chapter on our story.' },
      },
      {
        type: 'checklist',
        data: {
          items: [
            { text: 'Make Games', checked: false },
            {
              text: 'Make Community',
              checked: false,
            },
            { text: 'Improve Ourselves', checked: false },
          ],
        },
      },
      { type: 'delimiter', data: {} },
    ],
    version: '2.19.1',
  };
  const onChange = (EditorJSInstance, content) => {
    console.log('Editor Content:');
    console.log(JSON.stringify(content));
  };

  return (
    <Page hero={<Hero title="3Pixel News" subtitle="Writing new post..." />}>
      <Card className={classes.PostDetails}>
        <label htmlFor="create-news-title">Title</label>
        <TextInput id="create-news-title" />
        <label htmlFor="create-news-description">Description</label>
        <TextArea id="create-news-description" />
        <Button>Save</Button>
      </Card>
      <ContentEditor data={content} onChange={onChange} />
    </Page>
  );
};
