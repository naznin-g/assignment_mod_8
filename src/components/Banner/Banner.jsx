import React from 'react';
import GooglePlay from "../../assets/google-play.png";
import AppStore from "../../assets/app-store.png";
import hero from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="bg-[#F5F5F5] py-10">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold py-5">
          We Build <br />
          <span className="text-[#8654EA]">Productive</span> Apps
        </h1>
        <p className="mx-auto max-w-3xl text-gray-500 py-5">
          At HERO.IO we craft innovative apps designed to make everyday life simpler, smarter, 
          and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex gap-5 justify-center py-5 flex-wrap">
          <button className="btn btn-outline flex items-center gap-2">
            <img src={GooglePlay} alt="Google Play" className="w-6 h-6" />
            Google Play
          </button>
          <button className="btn btn-outline flex items-center gap-2">
            <img src={AppStore} alt="App Store" className="w-6 h-6" />
            App files
          </button>
        </div>

        <div className="pt-5">
          <img src={hero} alt="Hero Image" className="mx-auto" />
        </div>

        <div className="py-10 bg-linear-purple text-white">
          <p className="text-3xl font-semibold">Trusted By Millions, Built For You</p>
          <div className="flex justify-center gap-10 flex-wrap mt-5 text-center">
            <div>
              <p className="text-white">Total Downloads</p>
              <p className="font-bold text-3xl">29.6 M</p>
              <p>21% More Than Last Month</p>
            </div>
            <div className="mx-[100px]">
              <p>Total Users</p>
              <p className="font-bold text-3xl">1.2 M</p>
              <p>15% Growth This Month</p>
            </div>
            <div>
              <p>Active Sessions</p>
              <p className="font-bold text-3xl">500 K</p>
              <p>10% More Than Last Month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
