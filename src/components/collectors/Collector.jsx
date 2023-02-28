import React from "react";
import User from "../User/User";
import styles from "./Collector.module.scss";

export default function Collector ({ name, avatar, verified, type }) {
  return (
    <div className={`${styles.container} ${type === "light" ? styles.light : styles.dark}`}>
      <User name={name} avatar={avatar} verified={verified} />
    </div>
  );
};