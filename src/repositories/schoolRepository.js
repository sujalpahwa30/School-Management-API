const db = require('../config/dbConfig');

exports.addSchool = (name, address, latitude, longitude) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
        db.query(query, [name, address, parseFloat(latitude), parseFloat(longitude)], (err, result) => {
            if (err) return reject(err);
            resolve(result.insertId);
        });
    });
};

exports.getAllSchools = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM schools";
        db.query(query, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};
