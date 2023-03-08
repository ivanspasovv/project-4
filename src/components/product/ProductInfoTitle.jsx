import React from 'react';
import {Typography} from '@mui/material';
import styles from './ProductInfoTitle.module.scss';

export default function ProductInfoTitle ({ text, title = "My NFT Name"}) {
  text = title
  return (
  <div className={styles['product-info-title']}>
    <Typography variant="h5" component="h2" className={styles.title} >
      {text}
    </Typography>
  </div>
  );
};
