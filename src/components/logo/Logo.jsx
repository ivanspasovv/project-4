import React from 'react';

function Logo(props) {
  const { type = 'default' } = props;
  let defaultLogo;
  const logoSrc = type === 'muted'
    ? '/images/logo-muted.svg'
    : '/images/logo.svg';

  return (
    <img  type={!defaultLogo ? "default" : "muted"  } src={logoSrc} alt="Logo" />
  );
}

export default Logo;