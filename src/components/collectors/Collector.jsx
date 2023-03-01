import React from "react";
import User from "../user/User";
import styles from "./Collector.module.scss";

export default function Collector ({ 
    name = "",
    avatar = '',
    verified = false,
    type, 
    nftsCount = 0,
    id = 0,
   }) {

  return (
    <div className={`${styles.container} ${type === "light" ? styles.light : styles.dark}`}>
      <div className={styles.id}>{id}</div>
      <User name={name} avatar={avatar} verified={verified} info={nftsCount + " items"} />
    </div>
  );
};