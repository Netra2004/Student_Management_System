const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

// ==========================================
// MIDDLEWARE
// ==========================================
app.use(cors());
app.use(express.json());


// ==========================================
// HOME ROUTE
// ==========================================
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Student Management System API is running"
    });
});


// ==========================================
// STUDENT ROUTES
// ==========================================
app.use(
    "/api/students",
    require("./routes/studentRoutes")
);


// ==========================================
// SERVER
// ==========================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});