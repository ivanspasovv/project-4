import { Grid, Container, Typography } from "@mui/material";
import CollectorColumn from "./CollectorColumn";
import { useState } from "react";
import _ from 'lodash';
import Select from "@mui/material/Select";
import styles from "./TopCollectors.module.scss";

export default function TopCollectors ({ collectors = [] }) {

    const [sortBy, setSortBy] = useState("price");

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const sortedCards = [...collectors].sort((a, b) => a[sortBy] - b[sortBy]);

    const collectorsWithId = collectors.map((collector, index) => ({
        ...collector,
        id: index + 1,
      }));
    
      // Split collectors into chunks of 3
      const collectorChunks = _.chunk(collectorsWithId, 3);

  return (
    <div>
          <Container  className={styles.container}>
              <div className={styles.title}>
                  <Typography variant="h2" >
                      Top Collectors
                  </Typography>
                  <Select value={sortBy} onChange={handleSortChange} className={styles.select}>
                      <option className={styles.option} value="price">Sort by Price</option>
                      <option className={styles.option} value="name">Sort by Name</option>
                  </Select>
              </div>

              <Grid container spacing={2}>
              {collectorChunks.map((chunk, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <CollectorColumn items={chunk} />
                </Grid>
                ))}
              </Grid>
          </Container>
      </div>
  );
};