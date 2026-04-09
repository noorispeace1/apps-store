import React from "react";
import Banner from "../../Components/homepage/Banner";
import Stats from "../../Components/homepage/Stats";
import TrendingApps from "../../Components/homepage/TrendingApps";
import { useLoaderData } from "react-router";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Stats />
      <TrendingApps />
    </>
  );
};

export default Homepage;
