import React, { PropTypes } from 'react';

import './Logo.css';

const Logo = (props) => {
  const { src, alt, url, imgWidth } = props;

  return (
    <a href={url}>
      <img
        src={src}
        alt={alt}
        width={imgWidth}
        className="brand-logo"
      />
    </a>
  );
};

Logo.propTypes = {
  /**
  * Brand Logo
  */
  src: PropTypes.string,
  /**
  * Logo Alternative Text
  */
  alt: PropTypes.string,
  /**
  * Logo URL
  */
  url: PropTypes.string,
  /**
  * Image width
  */
  imgWidth: PropTypes.number
};

export default Logo;
