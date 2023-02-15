import React from 'react';

const Logo = ({ type = 'default' }) => {
  let url;

  if (type === 'default') {
    url = '/images/logo.svg';
  } else if (type === 'muted') {
    url = '/images/logo-muted.svg';
  }

  return <img type={'default'} src={url} alt="Company Logo" />;
};

export default Logo;