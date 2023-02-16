import React from 'react';
import styles from './User.module.scss';
import Avatar from '../avatar/Avatar';

export default function User ({
  name = '',
  info = '',
  avatar = '',
  size = 55,
  verified = false,
}) {
  return (
    <div className={styles.user}>
    <Avatar verified url="/images/avatar.png"/>
      <div className={styles.details}>
        <div className={styles.name}>{name}</div>
        <div className={styles.info}>{info}</div>
      </div>
    </div>
  );
};