// Get all installed app IDs
const getInstalledApps = () => {
    const appsStr = localStorage.getItem("installedApps");
    return appsStr ? JSON.parse(appsStr) : [];
}

// Add an app to installed list
const addInstalledApp = (id) => {
    const installedApps = getInstalledApps();
    const idStr = id.toString();
    if (!installedApps.includes(idStr)) {
        installedApps.push(idStr);
        localStorage.setItem("installedApps", JSON.stringify(installedApps));
    }
}

// Remove an app from installed list
const removeInstalledApp = (id) => {
    let installedApps = getInstalledApps();
    installedApps = installedApps.filter(appId => appId !== id.toString());
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
}

export { getInstalledApps, addInstalledApp, removeInstalledApp };

