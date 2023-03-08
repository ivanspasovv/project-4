import React from 'react';
import styles from './ProductImage.module.scss';

export default function ProductImage ({ URL }) {
  return (
    <div className={styles['product-image']}>
      <img className={styles['image']} src={URL} alt="Product" />
    </div>
  );
};
