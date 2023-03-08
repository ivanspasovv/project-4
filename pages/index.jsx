import { useState, useEffect } from "react";

import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import ProductInfoTitle  from "../src/components/product/ProductInfoTitle";

import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import dataNfts from "../data/nfts.json";

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);
  
  useEffect(() => {
    const parsedData = dataFeatured.map((item, index) => {
      if (index === 0) {
        return { ...item, cols: 3, rows: 2 };
      }
      return { ...item, };
    });
    setFeaturedCards(parsedData);
  }, []);

    const trendingCards = dataTrending.map((item) => {
      return { ...item,  user: item.owner };
    });

    const liveCards = dataNfts.map((item) => {
      return { ...item,  user: item.owner };
    });

  return (
    <>
      <ProductInfoTitle />
      <Header />
      <Featured items={featuredCards}/>
      <Trending cards={trendingCards} />
      <TopCollectors collectors={dataUsers} />
      <How />
      <Auctions cards={liveCards} />
      <Footer />
    </>
  );
};
