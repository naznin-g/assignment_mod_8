import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getInstalledApps, addInstalledApp, removeInstalledApp } from "../../utility/installedAppsDB";
import InstalledAppCard from "../InstalledAppCard/InstalledAppCard.jsx"

const InstalledApps = () => {
  const allApps = useLoaderData(); // preloaded via loader
  const [apps, setApps] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    loadApps();
  }, [allApps]);

  // Load apps and mark installed state
  const loadApps = () => {
    const installedIds = getInstalledApps().map(id => parseInt(id));
    const appsWithState = allApps.map(app => ({
      ...app,
      isInstalled: installedIds.includes(app.id),
    }));
    setApps(appsWithState);
  };

  // Install an app
  const handleInstall = (id) => {
    addInstalledApp(id);
    setApps(prev =>
      prev.map(app => (app.id === id ? { ...app, isInstalled: true } : app))
    );
  };

  // Uninstall an app
  const handleUninstall = (id) => {
    removeInstalledApp(id);
    setApps(prev =>
      prev.map(app => (app.id === id ? { ...app, isInstalled: false } : app))
    );
  };

  // Sort apps
  const handleSort = (type) => {
    setSortType(type);
    let sorted = [...apps];
    if (type === "size") sorted.sort((a, b) => a.size - b.size);
    if (type === "downloads") sorted.sort((a, b) => b.downloads - a.downloads);
    setApps(sorted);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Title section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Your Apps</h1>
        <p className="text-lg text-gray-500 mt-2">
          Explore all trending apps on the market developed by us
        </p>
      </div>

      {/* Header: total apps + sort */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          {apps.length} Apps Found
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

      {/* App list */}
      {apps.length === 0 ? (
        <p className="text-center text-gray-500">No apps available</p>
      ) : (
        <div className="flex flex-col gap-4">
          {apps.map(app => (
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
