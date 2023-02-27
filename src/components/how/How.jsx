import React from "react";
import { Grid, Button } from "@mui/material";
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
            </Grid>
        </div>
    );
};