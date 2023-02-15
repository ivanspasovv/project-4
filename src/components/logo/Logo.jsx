import React from 'react';

export default function Logo(props) {
  const { type = 'default' } = props;
  const logoSrc = type === 'muted'
    ? '/images/logo-muted.svg'
    : '/images/logo.svg';

  return (
    <img src={logoSrc} alt="Logo" />
  );
};