import React from 'react';
import styles from './User.module.scss';
import Avatar from '../avatar/Avatar';

const User = ({
  name = 'fgfghfghb',
  info = 'ghhgfh',
  avatar = '',
  size = 55,
  verified = false,
}) => {
  return (
    <div className={styles.user}>
    <Avatar verified/>
      <div className={styles.details}>
        <div className={styles.name}>{name}</div>
        <div className={styles.info}>{info}</div>
      </div>
    </div>
  );
};

export default User;