import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styles from "./How.module.scss";

export default function How (title, description, items = [], link) {

    description = "rgrthrerthrfgdfgdflsdfldfnglkdfgnjsdflkgdfjlkgrytytj";
    title = "HOW IT WORKS";
    items = [
        {
           "title":"Title",
           "description":"rgrthrerthrfgdfgdflsdfldfnglkdfgnjsdflkgdfjlkgrytytj"
        }
     ],
    link = "https://google.com"
    return (
        <div className={styles.body}>
            <Grid container className={styles.container}>
                <Grid item xs={12} className={styles.info}>
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {description}
                    </p>
                    <p>
                        <Button variant="contained" href={link}  className={styles.btn}>
                            Learn more
                        </Button>
                    </p>
                </Grid>
                {/* <Grid item xs={12}>
                    {items.map((item, index) => (
                        <Step key={index}>
                            <StepLabel StepIconProps={{ style: { opacity: "0.1" } }}>
                                <Typography variant="h6" component="span" color="textSecondary">
                                    {item.number}
                                </Typography>
                                <Typography variant="subtitle1" component="span">
                                    {item.title}
                                </Typography>
                            </StepLabel>
                            <Typography variant="body1">{item.description}</Typography>
                        </Step>
                    ))}
                </Grid> */}
            </Grid>
        </div>
    );
};