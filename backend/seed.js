const mongoose = require("mongoose");
const User = require("./models/user");

mongoose.connect("mongodb://127.0.0.1:27017/engagementDB", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Failed:", err));

const seedUsers = async () => {
    await User.deleteMany({}); // Clear existing data

    await User.insertMany([
        { name: "John Doe", email: "john@example.com", engagementScore: 75, retentionCategory: "High" },
        { name: "Jane Smith", email: "jane@example.com", engagementScore: 50, retentionCategory: "Medium" },
        { name: "Mike Johnson", email: "mike@example.com", engagementScore: 20, retentionCategory: "Low" }
    ]);

    console.log("✅ Sample Users Added!");
    mongoose.connection.close();
};

seedUsers();
