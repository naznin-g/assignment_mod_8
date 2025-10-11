import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getInstalledApps, addInstalledApp, removeInstalledApp } from "../../Utility/installedAppsDB.js";
import InstalledAppCard from "../InstalledAppCard/InstalledAppCard.jsx";

const InstalledApps = () => {
  const allApps = useLoaderData(); // preloaded via loader
  const [installedApps, setInstalledApps] = useState([]);
  const [sortType, setSortType] = useState("");

  // Load only installed apps and mark installed state
  const loadInstalledApps = () => {
    const installedIds = getInstalledApps().map(id => parseInt(id));
    const filtered = allApps
      .filter(app => installedIds.includes(app.id))
      .map(app => ({ ...app, isInstalled: true })); // mark as installed
    setInstalledApps(filtered);
  };

  useEffect(() => {
    loadInstalledApps();
  }, [allApps]);

  // Install an app
  const handleInstall = (id) => {
    addInstalledApp(id);
    loadInstalledApps(); // refresh list
  };

  // Uninstall an app
  const handleUninstall = (id) => {
    removeInstalledApp(id);
    loadInstalledApps(); // refresh list
  };

  // Sort installed apps
  const handleSort = (type) => {
    setSortType(type);
    let sorted = [...installedApps];
    if (type === "size") sorted.sort((a, b) => a.size - b.size);
    if (type === "downloads") sorted.sort((a, b) => b.downloads - a.downloads);
    setInstalledApps(sorted);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Your Installed Apps</h1>
        <p className="text-lg text-gray-500 mt-2">
          Explore all Trending Apps on the Market Developed by us.
          
        </p>
      </div>

      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          {installedApps.length} Apps Found
        </h2>

        <select
          className="border border-gray-300 rounded-md py-2 pl-4 pr-10 appearance-none text-sm cursor-pointer"
          value={sortType}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="size">Sort By Size</option>
          <option value="downloads">Sort By Downloads</option>
        </select>
      </div>

      
      {installedApps.length === 0 ? (
        <p className="text-center text-gray-500">No apps installed</p>
      ) : (
        <div className="flex flex-col gap-4">
          {installedApps.map(app => (
            <InstalledAppCard
              key={app.id}
              app={app}
              isInstalled={app.isInstalled}
              onInstall={() => handleInstall(app.id)}
              onUninstall={() => handleUninstall(app.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InstalledApps;