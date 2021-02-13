import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';

import { Col, Container, Hero, Page, Row } from 'modules/common/components';
// import classes from 'modules/news/pages/ReadNewsPostPage/styles.module.css';
import { fetchPostBySlug } from 'modules/news/services/News';
import { PostErrorMessage } from './PostErrorMessage';

export const ReadNewsPostPage = () => {
  const { slug } = useParams();
  const { data, status, error } = useQuery(['news', slug], fetchPostBySlug, {
    staleTime: 30000,
  });

  return (
    <Page hero={<Hero compact title="3Pixel News" subtitle="What have we been up to?" />}>
      <Container>
        <Row>
          <Col>
            {status === 'loading' && <h1>Loading...</h1>}
            {status === 'error' && <PostErrorMessage error={error} />}
            {status === 'success' && (
              <>
                <h1>{data.title}</h1>
                <span>{data.description}</span>

                <span>
                  <Link to={`/profile/${data.author._id}`}>
                    <strong>By</strong> {data.author.username}
                  </Link>
                </span>
                <span>
                  <FaCalendarAlt /> {dateToString(new Date(data.createdAt))}
                </span>
                {data.tags && (
                  <div>
                    {data.tags.map((tag, i) => (
                      <span key={`${i}-tag-${tag}`}>{tag}</span>
                    ))}
                  </div>
                )}
                <hr />
                {/*<PostReadMenu post={data} />*/}
                {/*<Markdown>{data.content}</Markdown>*/}
                {JSON.stringify(data.content)}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </Page>
  );
};

function dateToString(date) {
  const dateTimeFormat = { dateStyle: 'full', timeStyle: 'long' };
  return new Intl.DateTimeFormat('en-US', dateTimeFormat).format(date);
}
