import React from "react";
import TopSection from "./TopSection/TopSection";
import Filterlinks from "./Filterlinks/Filterlinks";
import MainCard from "./CardSection/MainCard/MainCard";
import RelatedCard from "./CardSection/RelatedCard/RelatedCard";
import SubscribeEmail from "./SubscribeEmail/SubscribeEmail";

const Home = () => {
  return (
    <div className="w-full px-10 sm:px-20 md:px-40">
      <h2 className="text-mainDark text-4xl tracking-wide font-medium py-4 mt-6">
        Best Website builders in the US
      </h2>

      <TopSection />
      <Filterlinks />
      <MainCard />
      <RelatedCard />
      <SubscribeEmail />
    </div>
  );
};

export default Home;
