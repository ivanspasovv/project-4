import { useState, useEffect } from "react";

import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";

import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import dataNfts from "../data/nfts.json";

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);
  useEffect(() => {
      setFeaturedCards(dataFeatured);
  }, []);

  return (
    <>
      <Header />
      <Featured />
      <Trending data={dataTrending} />
      <TopCollectors data={dataUsers} />
      <How />
      <Auctions data={dataNfts} />
      <Footer />
    </>
  );
};
