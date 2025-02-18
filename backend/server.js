const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require("./routes/userRoutes");
require('dotenv').config(); // Load environment variables


const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', userRoutes);
app.get('/', (req, res) => {
    res.send('Customer Engagement Dashboard');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/engagementDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => {
    console.error("❌ MongoDB Connection Failed:", err);
    process.exit(1); // Exit if DB connection fails
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
