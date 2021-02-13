import React from 'react';

import HeroImage from 'assets/hero.jpg';
import { BottomNavbar, Flex } from 'modules/common/components';
import classes from 'modules/common/components/Hero/styles.module.css';
import classnames from 'classnames';

export const Hero = ({ title, subtitle, image = HeroImage, cta, compact = false }) => {
  return (
    <>
      <Flex
        className={classnames(classes.Hero, { [classes.Compact]: compact })}
        justifyCenter
        alignCenter
        fluid
      >
        <div
          className={classes.BackgroundBlur}
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden={true}
        />
        <h1 className={classes.Title}>{title}</h1>
        <p className={classes.Subtitle}>{subtitle}</p>
        {cta}
      </Flex>
      <BottomNavbar />
    </>
  );
};
