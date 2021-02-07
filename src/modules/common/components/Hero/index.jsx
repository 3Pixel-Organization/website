import React from 'react';

import { Container } from 'modules/common/components/Container';
import classes from 'modules/common/components/Hero/styles.module.css';

export const Hero = ({ title, subtitle, image, cta }) => {
  return (
    <Container className={classes.Hero} justifyCenter alignCenter fluid>
      <div
        className={classes.BackgroundBlur}
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden={true}
      />
      <h1 className={classes.Title}>{title}</h1>
      <p className={classes.Subtitle}>{subtitle}</p>
      {cta}
    </Container>
  );
};
