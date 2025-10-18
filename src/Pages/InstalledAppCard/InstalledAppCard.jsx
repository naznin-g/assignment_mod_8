import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import avgRatingIcon from "../../assets/icon-ratings.png";

const InstalledAppCard = ({ app, isInstalled, onInstall, onUninstall }) => {
  return (
    <div className="flex justify-between border rounded-lg p-4 shadow-sm bg-white">
      
      

      
      <div className="flex items-center flex-grow gap-4">
        
        {/* Left part: App image */}
        <div className="flex-shrink-0">
          <img src={app.image} alt={app.title} className="w-16 h-16 rounded" />
        </div>

        {/* Right part: App info */}
        <div className="flex flex-col">
          {/* Title */}
          <h3 className="text-lg font-semibold">{app.title}</h3>

          {/* Downloads & Rating */}
          <div className="flex items-center text-gray-500 mt-1 gap-4">
            <div className="flex items-center gap-1">
              <img src={downloadIcon} alt="Downloads" className="w-4 h-4" />
              <span className="text-[#32B06F]">{app.downloads}</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={avgRatingIcon} alt="Rating" className="w-4 h-4" />
              <span className="text-[#FF8811]">{app.ratingAvg}</span></div>
              <div className="text-gray-500">{app.size} MB</div>
            
          </div>

          
        </div>
      </div>

      
      <div className="flex-shrink-0 mr-4">
        {isInstalled ? (
          <button
            className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
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
    </div>
  );
};

export default InstalledAppCard;
