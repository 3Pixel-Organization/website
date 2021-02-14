import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Card,
  ContentEditor,
  Hero,
  Page,
  TextInput,
  TextArea,
  Button,
  Alert,
  Container,
  Row,
  Col,
} from 'modules/common/components';
import { useNavigation } from 'hooks/useNavigation';

import { createPost } from 'modules/news/services/News';
import classes from 'modules/news/pages/CreateNewsPostPage/styles.module.css';

const defaultContent = {
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

export const CreateNewsPostPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const { navigate } = useNavigation();
  const [content, setContent] = useState(defaultContent);
  const [creating, setCreating] = useState(false);
  const [postErrors, setPostErrors] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const onContentChange = (EditorJSInstance, editorContent) => {
    setContent(editorContent);
  };

  const onSubmit = async (data) => {
    if (creating || Object.keys(errors).length > 0) return;
    const post = { ...data, content: content.blocks };
    setErrorMessage(null);
    setPostErrors(null);
    try {
      setCreating(true);
      const slug = await createPost(post);
      if (slug) {
        setCreating(false);
        navigate(`/news/${slug}`);
      }
    } catch (err) {
      console.error(err);
      const data = err.response?.data ?? err.message;
      if (Array.isArray(data) && data?.length) {
        setPostErrors(data);
      }
      setCreating(false);
    }
  };

  return (
    <Page hero={<Hero title="3Pixel News" subtitle="Writing new post..." />}>
      <Container>
        <Row>
          <Col xs={12}>
            <Card as="form" onSubmit={handleSubmit(onSubmit)} className={classes.PostDetails}>
              <label htmlFor="create-news-title">Title</label>
              <TextInput
                ref={register({ required: true, minLength: 3, maxLength: 128 })}
                id="create-news-title"
                name="title"
                minLength={3}
                maxLength={128}
                required
              />
              <label htmlFor="create-news-description">Description</label>
              <TextArea
                ref={register({ required: true, minLength: 3, maxLength: 280 })}
                id="create-news-description"
                name="description"
                minLength={3}
                maxLength={280}
                required
              />
              <Button
                as="input"
                type="submit"
                className={classes.SubmitButton}
                disabled={Object.keys(errors).length > 0 || creating}
              >
                Save
              </Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card className={classes.Tutorial}>
              <ul>
                <li>
                  You can press <code>tab</code> to see the menu.
                </li>
                <li>You can add images by pasting an url in the editor.</li>
              </ul>
              {errorMessage && <Alert type="error">errorMessage</Alert>}
              {postErrors && <Alert type="error">{postErrors[0].message}</Alert>}
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ContentEditor data={content} onChange={onContentChange} />
          </Col>
        </Row>
      </Container>
    </Page>
  );
};
