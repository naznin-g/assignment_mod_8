import React, { useState, useEffect } from "react";
import AppCard from "../../Pages/AppCard/AppCard.jsx";
import { useLoaderData } from "react-router-dom";

const Apps = () => {
  // Get apps data from loader
  const apps = useLoaderData();

  // State for search term and filtered apps
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);

  // Initialize filtered apps when data loads
  useEffect(() => {
    if (Array.isArray(apps)) {
      setFilteredApps(apps);
    }
  }, [apps]);

  // Search/filter function
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (Array.isArray(apps)) {
      const filtered = apps.filter((app) =>
        app.title.toLowerCase().includes(term)
      );
      setFilteredApps(filtered);
    }
  };

  return (
    <div className="p-6">
      {/* Heading + Paragraph */}
      <h1 className="text-3xl font-bold text-center mb-2">Our All Applications</h1>
      <p className="text-center text-gray-600 mb-4">
        Explore All Apps in the Market Developed by us. We code for Millions!
      </p>

      {/* Number of apps and search */}
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold">{filteredApps.length} apps available</p>
        <input
          type="text"
          placeholder="Search apps..."
          value={searchTerm}
          onChange={handleSearch}
          className="border rounded p-2 w-64"
        />
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {Array.isArray(filteredApps) &&
          filteredApps.map((app) => <AppCard key={app.id} app={app} />)}
      </div>
    </div>
  );
};

export default Apps;

