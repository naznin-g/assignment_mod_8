import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getInstalledApps, removeInstalledApp } from "../../utility/installedAppsDB";
import downloadIcon from "../../assets/icon-downloads.png";
import avgRatingIcon from "../../assets/icon-ratings.png";

const InstalledApps = () => {
  const allApps = useLoaderData(); // ✅ get data from loader
  const [installedApps, setInstalledApps] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    loadInstalledApps();
  }, [allApps]);

  const loadInstalledApps = () => {
    const installedIds = getInstalledApps().map(id => parseInt(id));
    if (Array.isArray(allApps)) {
      const appsList = allApps.filter(app => installedIds.includes(app.id));
      setInstalledApps(appsList);
    }
  }

  const handleUninstall = (id) => {
    removeInstalledApp(id);
    loadInstalledApps();
  }

  const handleSort = (type) => {
    setSortType(type);
    let sorted = [...installedApps];
    if (type === "size") {
      sorted.sort((a, b) => a.size - b.size);
    } else if (type === "downloads") {
      sorted.sort((a, b) => b.downloads - a.downloads);
    }
    setInstalledApps(sorted);
  }

  return (
    
	<div>
	<div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold text-gray-800 ">Your Installed Apps</h1>
        <p class="text-lg text-gray-500 mt-2">Explore All Trending Apps on the Market developed by us</p>
    </div>
	
	
	
	  <div className="flex justify-between items-center mb-6">
  <h2 className="text-xl font-semibold text-gray-700">
    {installedApps.length} Apps Found
  </h2>

  <div className="relative">
    <select
      className="border border-gray-300 rounded-md py-2 pl-4 pr-10 appearance-none text-sm cursor-pointer"
      value={sortType}
      onChange={(e) => handleSort(e.target.value)} // call your sort function
    >
      <option value="">Sort By</option>
      <option value="size">Sort By Size</option>
      <option value="downloads">Sort By Downloads</option>
    </select>

    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
</div>


	

      {/* Installed apps list */}
      <table className="min-w-full table-auto mt-4 border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Downloads</th>
            <th className="border px-4 py-2">Rating</th>
            <th className="border px-4 py-2">Size (MB)</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {installedApps.map(app => (
            <tr key={app.id}>
              <td className="border px-4 py-2">{app.title}</td>
              <td className="border px-4 py-2">{app.downloads}</td>
              <td className="border px-4 py-2">{app.ratingAvg}</td>
              <td className="border px-4 py-2">{app.size}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-green-400 text-white px-2 py-1 rounded"
                  onClick={() => handleUninstall(app.id)}
                >
                  Uninstall
                </button>
              </td>
            </tr>
          ))}
          {installedApps.length === 0 && (
            <tr>
              <td colSpan="5" className="border px-4 py-2 text-center">
                No installed apps
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default InstalledApps;


