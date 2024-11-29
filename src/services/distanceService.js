exports.calculateDistance = (loc1, loc2) => {
    const toRadians = (degrees) => degrees * (Math.PI / 180);
    const R = 6371; 

    const dLat = toRadians(loc2.latitude - loc1.latitude);
    const dLon = toRadians(loc2.longitude - loc1.longitude);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(loc1.latitude)) * Math.cos(toRadians(loc2.latitude)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; 
};
