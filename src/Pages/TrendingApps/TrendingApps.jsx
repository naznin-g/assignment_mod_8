import React from "react";
import AppCard from "../../Pages/AppCard/AppCard.jsx";
import { useNavigate } from "react-router-dom";

const TrendingApps = ({ apps }) => {
  const navigate = useNavigate();

  // Show only first 12 apps
  const trendingApps = apps.slice(0, 12);

  return (
    <div className="p-6">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Trending Apps</h1>
        <p className="text-gray-600 mt-2">
          Explore the most popular apps developed by us
        </p>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {trendingApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      {/* Show All Apps Button */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/all-apps")}
          className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Show All Apps
        </button>
      </div>
    </div>
  );
};

export default TrendingApps;
