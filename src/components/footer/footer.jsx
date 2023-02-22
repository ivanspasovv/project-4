import React from 'react';
import { Grid, Container, Button } from '@mui/material';
import Logo from '../logo/Logo';
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <div>
            <Container>
                <Grid container className={styles.container}>
                    <Grid item >
                        <Logo type="muted" />
                    </Grid>
                    <Grid item className={styles.text}>
                        <span>
                            Some text describing the purpose of the footer
                        </span>
                    </Grid>
                    <Grid item >
                        <Button color="inherit" href="/privacy-policy" className={styles.buttons}>
                            Privacy Policy
                        </Button>
                        <Button color="inherit" href="/cookie-policy"  className={styles.buttons}>
                            Cookie Policy
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>

    );
};