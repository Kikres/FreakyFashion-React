import React from "react";
import Hero from "../components/Hero/Hero";
import PopularProducts from "../components/PopularProducts/PopularProducts";
import Spots from "../components/Spots/Spots";

const Home = (props) => {
  return (
    <div>
      <Hero {...props.hero} />
      <Spots spots={props.spots} />
      <PopularProducts {...props.popularProducts} />
    </div>
  );
};

export default Home;
