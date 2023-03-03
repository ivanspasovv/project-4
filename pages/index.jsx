import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";

export default function Index() {
  return (
    <div>
    <Header />
    <Featured />
    <Trending />
    <TopCollectors />
    <How />
    <Auctions />
    <Footer />
  </div>
  );
};
