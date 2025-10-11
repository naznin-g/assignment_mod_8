import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInstalledApps, addInstalledApp, removeInstalledApp } from "../../utility/installedAppsDB";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import Loader from "../../components/Loader/Loader.jsx"
import downloadIcon from "../../assets/icon-downloads.png";
import avgRatingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from JSON in public folder
  useEffect(() => {
    const fetchAppData = async () => {
      try {
        const res = await fetch("/appsData.json");
        const data = await res.json();
        const selectedApp = data.find((a) => a.id === parseInt(id));
        setApp(selectedApp);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching app data:", error);
        setIsLoading(false);
      }
    };

    fetchAppData();
  }, [id]);

  // Check install status
  useEffect(() => {
    if (app) {
      const installed = getInstalledApps().includes(app.id.toString());
      setIsInstalled(installed);
    }
  }, [app]);

  if (isLoading) return <p className="text-center mt-10"><Loader/></p>;
  if (!app) return <p className="text-center mt-10 text-red-500">App not found</p>;

  const { title, image, companyName, downloads, ratingAvg, reviews, size, description, ratings } = app;

  // Prepare bar chart data from "ratings" object
  const ratingBreakdownData = ratings.map((r) => ({
    star: r.name,
    count: r.count,
  }));

  // Install / Uninstall Handlers
  const handleInstall = () => {
    if (!isInstalled) {
      addInstalledApp(app.id);
      setIsInstalled(true);
      toast.success("App installed successfully!");
    } else {
      toast.info("App is already installed.");
    }
  };

  const handleUninstall = () => {
    if (isInstalled) {
      removeInstalledApp(app.id);
      setIsInstalled(false);
      toast.success("App uninstalled successfully!");
    } else {
      toast.info("App is not installed.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* App Header */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <img className="w-48 h-48 object-cover rounded-2xl shadow-md" src={image} alt={title} />
        <div className="flex-1">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-500">by {companyName}</p>

          {/* Stats section */}
          <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-700">
            <div className="flex items-center gap-2">
              <img src={downloadIcon} alt="downloads" className="w-5 h-5" />
              <span>{downloads.toLocaleString()} Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={avgRatingIcon} alt="rating" className="w-5 h-5" />
              <span>Rating: {ratingAvg}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={reviewIcon} alt="reviews" className="w-5 h-5" />
              <span>{reviews} Reviews</span>
            </div>
            </div>


          {/* Buttons */}
          <div className="mt-4">
            {!isInstalled ? (
              <button
                onClick={handleInstall}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
              >
                Install Now {size} MB
              </button>
            ) : (
              <button
                onClick={handleUninstall}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
              >
                Uninstall
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Rating Breakdown */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-3">Rating Breakdown</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart layout="vertical" data={ratingBreakdownData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="star" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppDetails;