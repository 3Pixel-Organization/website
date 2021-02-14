import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';

import { Card, Col, Container, Flex, Hero, Page, Renderer, Row } from 'modules/common/components';
import { fetchPostBySlug } from 'modules/news/services/News';
import { PostErrorMessage } from 'modules/news/pages/ReadNewsPostPage/PostErrorMessage';

export const ReadNewsPostPage = () => {
  const { slug } = useParams();
  const { data, status, error } = useQuery(['news', slug], fetchPostBySlug, {
    staleTime: 30000,
  });

  return (
    <Page hero={<Hero compact title="3Pixel News" subtitle="What have we been up to?" />}>
      <Container>
        <Row>
          <Col xs={12}>
            <Card>
              {status === 'loading' && <h1>Loading...</h1>}
              {status === 'error' && <PostErrorMessage error={error} />}
              {status === 'success' && (
                <Flex>
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
                  {data.content.map((block, i) => (
                    <Renderer key={block.type + i} type={block.type} data={block.data} />
                  ))}
                </Flex>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </Page>
  );
};

function dateToString(date) {
  return new Intl.DateTimeFormat('en-US').format(date);
}
