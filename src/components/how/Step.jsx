import React from "react";
import { Grid, Step } from '@mui/material';
import styles from "./Step.module.scss";

export default function InfoCardSteps({ items = [] }) {
  return (
    <>
      {items.map(({ number, title, description }) => (
        <Step key={number} >
          <Grid container className={styles.infoCard}>
            <Grid item xs={4} className={styles.number}>
              <div >{number}</div>
            </Grid>
            <Grid item xs={8}>
              <div style={{ padding: "1.5rem 1.5rem 0 1.5rem" }}>
                <div className={styles.title}>{title}</div>
                <div style={{ wordWrap: "break-word" }}>{description}</div>
              </div>
            </Grid>
          </Grid>
        </Step>
      ))}
    </>
  );
}