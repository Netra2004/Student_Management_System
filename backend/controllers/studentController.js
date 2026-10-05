const Student = require("../models/Student");

// ==========================================
// ADD STUDENT
// ==========================================
const addStudent = async (req, res) => {
    try {
        const { name, email, phone, course, age } = req.body;

        // Basic validation
        if (!name || !email || !phone || !course || !age) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Create student
        const student = await Student.create({
            name,
            email,
            phone,
            course,
            age
        });

        res.status(201).json({
            success: true,
            message: "Student added successfully",
            data: student
        });

    } catch (error) {
        console.error("Add student error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to add student",
            error: error.message
        });
    }
};


// ==========================================
// GET ALL STUDENTS
// ==========================================
const getStudents = async (req, res) => {
    try {
        const students = await Student.find().sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            count: students.length,
            data: students
        });

    } catch (error) {
        console.error("Get students error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch students",
            error: error.message
        });
    }
};


// ==========================================
// GET SINGLE STUDENT
// ==========================================
const getStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            data: student
        });

    } catch (error) {
        console.error("Get student error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch student",
            error: error.message
        });
    }
};


// ==========================================
// UPDATE STUDENT
// ==========================================
const updateStudent = async (req, res) => {
    try {
        const { name, email, phone, course, age } = req.body;

        // Basic validation
        if (!name || !email || !phone || !course || !age) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            {
                name,
                email,
                phone,
                course,
                age
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: student
        });

    } catch (error) {
        console.error("Update student error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to update student",
            error: error.message
        });
    }
};


// ==========================================
// DELETE STUDENT
// ==========================================
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(
            req.params.id
        );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        });

    } catch (error) {
        console.error("Delete student error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to delete student",
            error: error.message
        });
    }
};


// ==========================================
// SEARCH STUDENTS
// ==========================================
const searchStudents = async (req, res) => {
    try {
        const { query } = req.query;

        // If search box is empty, return all students
        if (!query || query.trim() === "") {
            const students = await Student.find().sort({
                createdAt: -1
            });

            return res.status(200).json({
                success: true,
                count: students.length,
                data: students
            });
        }

        const students = await Student.find({
            $or: [
                {
                    name: {
                        $regex: query,
                        $options: "i"
                    }
                },
                {
                    email: {
                        $regex: query,
                        $options: "i"
                    }
                },
                {
                    course: {
                        $regex: query,
                        $options: "i"
                    }
                }
            ]
        }).sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            count: students.length,
            data: students
        });

    } catch (error) {
        console.error("Search students error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to search students",
            error: error.message
        });
    }
};


// ==========================================
// EXPORT CONTROLLERS
// ==========================================
module.exports = {
    addStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent,
    searchStudents
};