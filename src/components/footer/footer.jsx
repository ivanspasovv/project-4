import { Container, Button, Grid } from '@mui/material';
import styles from "./Footer.module.scss";
import Logo from '../logo/Logo';

export default function Footer() {
    return (
        <div>
            <Container maxWidth="lg" >
                <Grid container spacing={0} justifyContent="space-between" alignItems="center">
                    <Grid item xs={12} sm={2}>
                        <Logo type="muted" />
                    </Grid>
                    <Grid item xs={12} sm={4} className={styles.text}>
                        <p>
                            Some text describing the purpose of the footer
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={4} >
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