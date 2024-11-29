const schoolRepository = require('../repositories/schoolRepository');
const { calculateDistance } = require('../services/distanceService');

exports.addSchool = async (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const schoolId = await schoolRepository.addSchool(name, address, latitude, longitude);
        res.status(201).json({ message: "School added successfully", schoolId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listSchools = async (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ message: "Latitude and longitude are required" });
    }

    try {
        const schools = await schoolRepository.getAllSchools();
        const userLocation = { latitude: parseFloat(latitude), longitude: parseFloat(longitude) };

        const sortedSchools = schools.map((school) => ({
            ...school,
            distance: calculateDistance(userLocation, {
                latitude: school.latitude,
                longitude: school.longitude,
            }),
        })).sort((a, b) => a.distance - b.distance);

        res.status(200).json(sortedSchools);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
