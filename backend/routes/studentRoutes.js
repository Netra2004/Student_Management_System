const express = require("express");

const {
    addStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent,
    searchStudents
} = require("../controllers/studentController");

const router = express.Router();

// Add student
router.post("/", addStudent);

// Get all students
router.get("/", getStudents);

// Search students
router.get("/search", searchStudents);

// Get single student
router.get("/:id", getStudent);

// Update student
router.put("/:id", updateStudent);

// Delete student
router.delete("/:id", deleteStudent);

module.exports = router;