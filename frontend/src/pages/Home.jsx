import React from "react";
import Hero from "../components/layout/Hero";
import Gendercollection from "../components/products/Gendercollection";
import Newarrivals from "../components/products/Newarrivals";

const Home = () => {
  return (
    <div>
      <Hero />
      <Gendercollection />
      <Newarrivals />
    </div>
  );
};

export default Home;
