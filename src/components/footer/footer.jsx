import { Container, Button } from '@mui/material';
import Logo from '../logo/Logo';
import styles from "./Footer.module.scss";
import Grid from "@mui/material/Grid";

export default function Footer() {
    return (
            <Container>
                <Grid container justifyContent="space-between" alignItems="center">
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
    );
};