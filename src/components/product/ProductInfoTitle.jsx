import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './ProductInfoTitle.module.scss';

export default function ProductInfoTitle ({ text }) {
  return (
  <div className={styles['product-info-title']}>
    <Typography variant="string" className={styles.title}>
        {text}
    </Typography>
  </div>
  );
};