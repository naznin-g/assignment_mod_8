import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import avgRatingIcon from "../../assets/icon-ratings.png";

const InstalledAppCard = ({ app, isInstalled, onInstall, onUninstall }) => {
  return (
    <div className="flex items-center border rounded-lg p-4 shadow-sm bg-white">
      
      {/* Left section: Install/Uninstall button */}
      <div className="flex-shrink-0 mr-4">
        {isInstalled ? (
          <button
            className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
            onClick={onUninstall}
          >
            Uninstall
          </button>
        ) : (
          <button
            className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
            onClick={onInstall}
          >
            Install
          </button>
        )}
      </div>

      {/* Middle section: split into image and info */}
      <div className="flex items-center flex-grow gap-4">
        
        {/* Left part: App image */}
        <div className="flex-shrink-0">
          <img src={app.icon} alt={app.title} className="w-16 h-16 rounded" />
        </div>

        {/* Right part: App info */}
        <div className="flex flex-col">
          {/* Title */}
          <h3 className="text-lg font-semibold">{app.title}</h3>

          {/* Downloads & Rating */}
          <div className="flex items-center text-gray-500 mt-1 gap-4">
            <div className="flex items-center gap-1">
              <img src={downloadIcon} alt="Downloads" className="w-4 h-4" />
              <span>{app.downloads}</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={avgRatingIcon} alt="Rating" className="w-4 h-4" />
              <span>{app.ratingAvg}</span>
            </div>
          </div>

          {/* App size */}
          <p className="text-gray-400 mt-1">Size: {app.size} MB</p>
        </div>
      </div>
    </div>
  );
};

export default InstalledAppCard;
