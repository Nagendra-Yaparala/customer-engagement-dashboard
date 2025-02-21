const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    lastLogin: { type: Date, default: Date.now },
    engagementScore: { type: Number, required: true, min: 0, max: 100 },
    retentionCategory: { type: String, enum: ["High", "Medium", "Low"], required: true }
});

module.exports = mongoose.model("User", UserSchema);
