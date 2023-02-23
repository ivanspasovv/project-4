export default function Logo ({ type = 'default' }) {
  let url;

  if (type === 'default') {
    url = '/images/logo.svg';
  } else if (type === 'muted') {
    url = '/images/logo-muted.svg';
  }

  return <img src={url} alt="Company Logo" />;
};
