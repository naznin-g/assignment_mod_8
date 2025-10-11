import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root.jsx"; 
import ErrorPage from '../Pages/ErrorPage/ErrorPage.jsx';
import AppError from '../Pages/AppError/AppError.jsx';
import Home from "../Pages/Home/Home.jsx";
import Apps from '../Pages/Apps/Apps.jsx';
import InstalledApps from '../Pages/InstalledApps/InstalledApps.jsx';
import AppDetails from "../Pages/AppDetails/AppDetails.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
       //errorElement: <ErrorPage/>   
        children: [
            
            {
                index: true,
                path: "/",
                Component: Home,
				loader:() =>fetch("/appsData.json"),
            },

            
            {
                path: "/all-apps",
                Component: Apps,
                loader: () => fetch('/appsData.json'),
            },

            
            {
                path: "/installation",
                Component: InstalledApps,
                loader: () => fetch('/appsData.json'),
            },

            
            {
                path: "/app/:id",
                Component: AppDetails,
                loader: () => fetch('/appsData.json'),
                errorElement: <AppError />, 
            },

            
            {
                path: "*",
                Component: ErrorPage,
            }
        ]
    }
]);
