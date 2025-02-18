const express = require('express');

const User = require("../models/user");
const user = require('../models/user');
const router = express.Router();

router.get("/users", async (req,res) => {
    const users = await User.find();
    res.json(users);
})
router.get("/churn-prediction", async (req, res) => {
    const users = await User.find();
    const predictions = users.map(user => ({
        ...user._doc,
        churnRisk: user.engagementScore < 50 ? "High" : "Low"
    }));
    res.json(predictions);
});


module.exports = router;