import React from 'react';
import Logo from '../logo/Logo';
import { Grid, Button, Container, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <Container >
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={2}>
            <Logo />
          </Grid>
          <Grid item xs={5}>
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
          <Grid item xs={5} className={styles.btnContainer} >
              <Button color="inherit">Home</Button>
              <Button color="inherit">Activity</Button>
              <Button color="inherit" className={styles.active}>Explore</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;