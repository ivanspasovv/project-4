import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './ProductInfoTitle.module.scss';

export default function ProductInfoTitle ({ text, title = "My NFT Name"}) {
  text = title
  return (
  <Typography className={styles['product-info-title']}>
    <Typography variant="h5" className={styles.title}>
        {text}
      </Typography>
  </Typography>
  );
};