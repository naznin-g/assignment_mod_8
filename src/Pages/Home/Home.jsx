
import React from "react";
import Banner from "../../components/Banner/Banner.jsx";
import TrendingApps from "../TrendingApps/TrendingApps.jsx";
import { useLoaderData } from "react-router-dom";
import Loader from "../../components/Loader/Loader.jsx";

const Home = () => {
  const data = useLoaderData();

  if (!data) return <Loader />;

  return (
    <div>
      <Banner />
      <TrendingApps apps={data} />
    </div>
  );
};

export default Home;
