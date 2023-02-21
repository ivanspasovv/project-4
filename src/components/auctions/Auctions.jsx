import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import Card from "../card/Card";
import Select from "@mui/material/Select";
import styles from "./Auctions.module.scss";
import Container from "@mui/material/Container";

export default function Auctions ({ 

    cards = [
        {
            "name": "Clock",
            "user": {
                "avatar": {
                    "url": "images/avatar.png"
                },
                "verified": true
            },
            "mediaUrl": "images/nft.jpg",
            "price": 1,
            "currency": "ETH"
        },
        {
           "name":"DOGE",
           "user":{
              "avatar":{
                 "url":"images/avatar.png"
              },
              "verified":true
           },
           "mediaUrl":"images/nft.jpg",
           "price":2.3,
           "currency":"ETH"
        },
        {
           "name":"BTC",
           "user":{
              "avatar":{
                 "url":"images/avatar.png"
              },
              "verified":true
           },
           "mediaUrl":"images/nft.jpg",
           "price":5,
           "currency":"ETH"
        },
        {
           "name":"Litecoin",
           "user":{
              "avatar":{
                 "url":"images/avatar.png"
              },
              "verified":true
           },
           "mediaUrl":"images/nft.jpg",
           "price":10,
           "currency":"ETH"
        }
     ]

}) {
  const [sortBy, setSortBy] = useState("price");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedCards = [...cards].sort((a, b) => a[sortBy] - b[sortBy]);

  return (
    <div>
    <Container sx={{ mt: 1 }}>
        <div className={styles.title}>
            <Typography variant="h2" >
                Live Auctions
            </Typography>
        <Select value={sortBy} onChange={handleSortChange} className={styles.select}>
            <option className={styles.option} value="price">Sort by Price</option>
            <option className={styles.option} value="name">Sort by Name</option>
        </Select>
        </div>
      
      <Grid container spacing={4}>
        {sortedCards.map((card) => (
          <Grid item xs={12} sm={6} md={3}>
            <Card {...card} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
};