import React, { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { getInstalledApps, addInstalledApp, removeInstalledApp } from '../../utility/installedAppsDB';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import downloadIcon from "../../assets/icon-downloads.png";
import avgRatingIcon from "../../assets/icon-ratings.png";
import ReviewIcon from "../../assets/icon-review.png";
const AppDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id);
    const allApps = useLoaderData();
    const app = allApps.find(a => a.id === appId);

    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const installed = getInstalledApps().includes(appId.toString());
        setIsInstalled(installed);
    }, [appId]);

    if (!app) return <p>App not found</p>;

    const { name, image, company, downloads, rating, reviews, size, description, ratingBreakdown } = app;

    const handleInstall = () => {
        if (!isInstalled) {
            addInstalledApp(appId);
            setIsInstalled(true);
            toast.success("App installed successfully!");
        } else {
            toast.info("App is already installed.");
        }
    }

    const handleUninstall = () => {
        if (isInstalled) {
            removeInstalledApp(appId);
            setIsInstalled(false);
            toast.success("App uninstalled successfully!");
        } else {
            toast.info("App is not installed.");
        }
    }

    return (
        <div className="w-3/4 mx-auto p-4">
            <div className="flex gap-6">
                <img className="w-48 h-48 object-cover" src={image} alt={name} />
                <div>
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="text-gray-600">by {company}</p>
                    <p>Downloads: {downloads.toLocaleString()}</p>
                    <p>Average Rating: {rating} ({reviews} reviews)</p>
                    <p>Size: {size} MB</p>
                    <div className="mt-2">
                        {!isInstalled ? (
                            <button onClick={handleInstall} className="btn btn-accent mr-2">Install Now</button>
                        ) : (
                            <button onClick={handleUninstall} className="btn btn-error mr-2">Uninstall</button>
                        )}
                    </div>
                </div>
            </div>

            {/* Horizontal Bar Chart for ratings */}
            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Rating Breakdown</h3>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart layout="vertical" data={ratingBreakdown}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="star" type="category" />
                        <Tooltip />
                        <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* App Description */}
            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p>{description}</p>
            </div>

            <ToastContainer />
        </div>
    );
}

export default AppDetails;

            
    



