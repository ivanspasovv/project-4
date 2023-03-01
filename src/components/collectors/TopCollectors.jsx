import { Grid, Container, Typography } from "@mui/material";
import CollectorColumn from "./CollectorColumn";
import { useState } from "react";
import Select from "@mui/material/Select";
import styles from "./TopCollectors.module.scss";

export default function TopCollectors ({ collectors = [] }) {

    const [sortBy, setSortBy] = useState("price");

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const sortedCards = [...collectors].sort((a, b) => a[sortBy] - b[sortBy]);

  return (
    <div>
          <Container sx={{ mt: 1 }}>
              <div className={styles.title}>
                  <Typography variant="h2" >
                      TopCollectors
                  </Typography>
                  <Select value={sortBy} onChange={handleSortChange} className={styles.select}>
                      <option className={styles.option} value="price">Sort by Price</option>
                      <option className={styles.option} value="name">Sort by Name</option>
                  </Select>
              </div>

              <Grid container spacing={4}>
                  <CollectorColumn />
              </Grid>
          </Container>
      </div>
  );
};