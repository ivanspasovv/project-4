import React from 'react';
import Logo from '../logo/Logo';
import { Grid, Button, Container, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <Container className={styles.container}>
        <Grid container alignItems="center">
          <Grid item xs={2}>
            <Logo />
          </Grid>
          <Grid item xs={6}>
            <div>
                <TextField
                    className={styles.input}
                    placeholder="Find items, users and activities"
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon style={{ color: 'white' }}/>
                        </InputAdornment>
                        ),
                    }}
                />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <Button color="inherit" className={styles.btn}>Home</Button>
              <Button color="inherit" className={styles.btn}>Activity</Button>
              <Button color="inherit" className={styles.btn}>Explore</Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;