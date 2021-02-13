import React from 'react';
import { GiGamepadCross } from 'react-icons/gi';
import { ImFileEmpty } from 'react-icons/im';

import { Link } from 'react-router-dom';

import { Card } from 'modules/common/components';
import classes from 'modules/news/components/styles.module.css';

export const NewsListItem = ({ post, blank = false }) => {
  if (blank) {
    return (
      <Card className={classes.NewsListItem}>
        <div className={classes.Image}>
          <ImFileEmpty style={{ animation: 'none' }} />
        </div>
        <div className={classes.Text}>
          <h3 className={classes.Title}>There are no news yet...</h3>
          <p className={classes.Description}>
            But we're working hard on that! So, keep an eye on us to see what we'll come up with.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card as={Link} to={`/news/${post.slug}`} className={classes.NewsListItem}>
      <div className={classes.Image}>
        <GiGamepadCross />
      </div>
      <div className={classes.Text}>
        <h3 className={classes.Title}>{post.title}</h3>
        <p className={classes.Description}>{post.description}</p>
      </div>
    </Card>
  );
};
