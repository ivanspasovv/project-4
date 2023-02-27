import React from "react";
import { Grid, Step } from '@mui/material';
import styles from "./Step.module.scss";

export default function InfoCardSteps({ items }) {
  return (
    <>
      {items.map(({ number, title, description }) => (
        <Step key={number}>
          <Grid container spacing={2}>
            <Grid item xs={2} className={styles.number}>
              <div>{number}</div>
            </Grid>
            <Grid item xs={10}>
              <div>
                <div>{title}</div>
                <div>{description}</div>
              </div>
            </Grid>
          </Grid>
        </Step>
      ))}
    </>
  );
}