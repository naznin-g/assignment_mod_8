import React from "react";
import { Link } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import avgRatingIcon from "../../assets/icon-ratings.png";

const AppCard = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;

  return (
    <Link to={`/app/${app.id}`}>
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer flex flex-col justify-between">
        
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded"
        />

        
        <h2 className="text-lg font-bold mt-2 line-clamp-2">{title}</h2>

        
        <div className="flex justify-between mt-2">
          <div className="flex items-center gap-2 bg-gray-200 text-green-500 px-3 py-1 rounded">
            <img src={downloadIcon} alt="Downloads" className="w-4 h-4" />
            <span>{downloads}</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-200 text-yellow-500 px-3 py-1 rounded">
            <img src={avgRatingIcon} alt="Rating" className="w-4 h-4" />
            <span>{ratingAvg}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
