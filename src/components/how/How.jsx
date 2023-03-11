import React from "react";
import { Grid, Button } from "@mui/material";
import styles from "./How.module.scss";
import InfoCardSteps from "../how/Step";

export default function How ({title = "", description = "", items = [], link = ""}) {

    description = "Discover, collect, and sell extraordinary NFTs on the worlds's first & largest NFT marketplace= There are three things you'll need in place to open your account and start buying or selling NFTs on BUM";
    title = "HOW IT WORKS";
    items = [
        {  "number":"1",
           "title":"DIGITAL CURRENCY",
           "description":"You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange"
        },
        {   "number":"2",
            "title":"CRYPTO WALLET",
            "description":"A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain."
         },
         {  "number":"3",
            "title":"BUM.",
            "description":"Let's correct your wallet to BUM, edit your profile, and begin interacting in the space."
         },
     ],
    link = "https://google.com"
    return (
        <div className={styles.container}>
            <Grid container className={styles.how} >
                <Grid item xs={6} className={styles.info}>
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
                <Grid item xs={1.5} >
                </Grid>
                <Grid item xs={4.5} className={styles.infoCard} style={{marginTop: "-3rem"}}>
                    <InfoCardSteps items={items}/>
                </Grid>
            </Grid>
        </div>
    );
};