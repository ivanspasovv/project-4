import React from "react";
import { Grid, Step } from '@mui/material';
import styles from "./Step.module.scss";

export default function StepComponent ({ number, title, description }) {
  
  return (
    <Step>
      <Grid container spacing={2}>
        <Grid item xs={2}>
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
  );
}

function InfoCardSteps() {
  const items = [
    { number: "1", title: "Info Card 1", description: "Description of info card 1" },
    { number: "2", title: "Info Card 2", description: "Description of info card 2" },
    { number: "3", title: "Info Card 3", description: "Description of info card 3" },
  ];
  return (
    <>
      {items.map((item) => (
        <InfoCardStep
          key={item.number}
          number={item.number}
          title={item.title}
          description={item.description}
        />
      ))}
    </>
  );
}



function InfoCardStep() {
  return <InfoCardSteps items={items} />;
}