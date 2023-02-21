import React from "react";
import { Grid, Container, Typography, Button } from '@mui/material';
import Logo from '../logo/Logo';
import styles from "./Footer.module.scss";

export default function Footer () {
  return (
      <div>
          <Container maxWidth="lg" sx={{ pt: 6, pb: 2 }}>
              <Grid container className={styles.container}>
                  <Grid item xs={12} sm={6}>
                      <Logo muted />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="textSecondary" align="center">
                          Some text describing the purpose of the footer
                      </Typography>
                      <Grid container justifyContent="center" spacing={2}>
                          <Grid item>
                              <Button color="inherit" href="/privacy-policy">
                                  Privacy Policy
                              </Button>
                          </Grid>
                          <Grid item>
                              <Button color="inherit" href="/cookie-policy">
                                  Cookie Policy
                              </Button>
                          </Grid>
                      </Grid>
                  </Grid>
              </Grid>
          </Container>
      </div>
      
    );
};