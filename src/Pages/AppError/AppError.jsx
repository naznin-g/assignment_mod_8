import React from "react";
import AppErrorImg from "../../assets/App-Error.png";
import { Link } from "react-router-dom";

const AppError = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <img src={AppErrorImg} alt="App Not Found" className="max-w-xs mb-6" />
      <h1 className="text-4xl font-bold mb-4 text-black">OOPS!! APP NOT FOUND</h1>
      <p className="text-gray-600 mb-6">
        The app you are requesting is not found in our system. Please try another app.
      </p>
      <Link
        to="/all-apps"
        className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        Go Back
      </Link>
    </div>
  );
};

export default AppError;
