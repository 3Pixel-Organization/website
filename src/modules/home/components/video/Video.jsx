import React from 'react';

import classes from 'modules/home/components/video/Video.module.css';

export const Video = ({ embed, className, ...otherProps }) => {
  return (
    <div className={classes.Video + ' ' + className} {...otherProps}>
      <iframe
        title='3Pixel Overview Video'
        src={embed}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
};
