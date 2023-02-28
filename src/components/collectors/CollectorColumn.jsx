import React from "react";
import Collector from "./Collector";
import styles from "./CollectorColumn.module.scss";

export default function CollectorColumn ({ items = [] }) {   

  return (
    <div className={styles.collectorColumn}>
      {items.map((item, index) => (
        <Collector
          key={item.id}
          type={index % 2 === 0 ? "dark" : "light"}
          name={item.name}
          nftsCount={item.nftsCount}
          avatar={item.avatar}
          verified={item.verified}
        />
      ))}
    </div>
  );
};