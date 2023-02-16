import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.scss';

export default function Avatar ({ size = 90, url, verified = false }) {
    const badge = verified ? (
          <img className={styles.badge} src="/images/verified.svg" alt="Verified" />
      ) : null;
    
      return (
        <div className={styles.avatar} style={{ width: size, height: size }}>
          <img className={styles.image} src={url} alt="Avatar" />
          {badge}
        </div>
      );
    };

Avatar.propTypes = {
  size: PropTypes.number,
  url: PropTypes.string.isRequired,
  verified: PropTypes.bool,
};