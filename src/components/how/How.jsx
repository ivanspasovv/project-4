import React from "react";
import { Grid, Button } from "@mui/material";
import styles from "./How.module.scss";
import InfoCardSteps from "../how/Step";

export default function How ({title = "", description = "", items = [], link = ""}) {

    description = "rgrthrerthrfgdfgdflsdfldfnglkdfgnjsdflkgdfjlkgrytytjrthrththhefgfgf";
    title = "HOW IT WORKS";
    items = [
        {  "number":"1",
           "title":"Title 1",
           "description":"rgrthrerthrfgdfgdflsdfldfnglkdfgnjsfghfghfgfghfgdgdfgdfgdfggdfgdfgdfgdflkgdfjlkgrytytj"
        },
        {   "number":"2",
            "title":"Title 2",
            "description":"rgrthrerthrfgdfgdflsdfldfnglkdfgnjsfghfghfgfghfgdgdfgdfgdfggdfgdfgdfgdflkgdfjlkgrytytj"
         },
         {  "number":"3",
            "title":"Title 3",
            "description":"rgrthrerthrfgdfgdflsdfldfnglkdfgnjsfghfghfgfghfgdgdfgdfgdfggdfgdfgdfgdflkgdfjlkgrytytj"
         },
     ],
    link = "https://google.com"
    return (
        <div className={styles.container}>
            <Grid container className={styles.how}>
                <Grid item xs={9} className={styles.info}>
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
                <Grid item xs={3} >
                    <InfoCardSteps items={items} className={styles.infoCard}/>
                </Grid>
            </Grid>
        </div>
    );
};