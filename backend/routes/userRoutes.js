const express = require('express');
const User = require("../models/User");
const router = express.Router();

// Get all users
router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ message: "Server error" });
    }
});

// Churn Prediction
router.get("/churn-prediction", async (req, res) => {
    try {
        const users = await User.find();
        const predictions = users.map(user => ({
            ...user.toObject(), // Convert Mongoose document to plain object
            churnRisk: user.engagementScore < 50 ? "High" : "Low"
        }));
        res.json(predictions);
    } catch (err) {
        console.error("Error fetching churn predictions:", err);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
