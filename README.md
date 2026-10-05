# 🎓 Student Management System

> A modern full-stack web application for managing student records efficiently through a clean, responsive, and user-friendly interface.

The **Student Management System** is a full-stack CRUD application built to simplify student record management. It provides an intuitive React frontend connected to a RESTful Node.js and Express.js backend with MongoDB for persistent data storage.

The application allows users to **add, view, update, and delete student records** through a simple and responsive interface.

---

## 🚀 Project Overview

Managing student information manually can be time-consuming and difficult to maintain. This project provides a centralized digital solution for storing and managing student records efficiently.

### 🎯 Main Objectives

- Simplify student record management
- Provide complete CRUD functionality
- Store student information in MongoDB
- Provide a responsive and easy-to-use interface
- Demonstrate full-stack web development using modern technologies
- Connect a React frontend with a RESTful backend API

---

## ✨ Features

### 👨‍🎓 Student Management

- ➕ Add new students
- 👀 View all student records
- ✏️ Edit existing student information
- 🗑️ Delete student records
- 🔄 Automatically refresh student data
- 📋 Display student information in an organized table

### 📝 Student Details

Each student record can contain:

- Student Name
- Email
- Phone Number
- Course
- Age

### 🎨 User Interface

- Clean and modern design
- Responsive layout
- Easy-to-use student form
- Organized student records table
- Edit and Delete actions
- Loading states
- Empty-state message
- User-friendly interface

---

## 🛠️ Technology Stack

### Frontend

- ⚛️ React.js
- ⚡ Vite
- 🎨 CSS3
- 💻 JavaScript
- 🔗 REST API Integration

### Backend

- 🟢 Node.js
- 🚂 Express.js
- 🔗 RESTful API
- 🌐 CORS
- 🔐 dotenv

### Database

- 🍃 MongoDB
- 🧩 Mongoose

### Development Tools

- 💻 Visual Studio Code
- 📮 Postman
- 🔧 Git
- 🐙 GitHub
- 📦 npm
- 🔄 Nodemon

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │      + Vite         │
                    └──────────┬──────────┘
                               │
                         REST API Calls
                               │
                               ▼
                    ┌─────────────────────┐
                    │  Express.js Server  │
                    │      Node.js        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Mongoose       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       MongoDB       │
                    │    Student Data     │
                    └─────────────────────┘

**📂 Project Structure**
Student_Management_System/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── studentController.js
│   │
│   ├── models/
│   │   └── Student.js
│   │
│   ├── routes/
│   │   └── studentRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── .gitignore
└── README.md

⚙️ Installation and Setup
1. Clone the Repository
          git clone https://github.com/Netra2004/Student_Management_System.git
Navigate to the project folder:
          cd Student_Management_System


🔧 Backend Setup

Navigate to the backend directory:
          cd backend

Install backend dependencies:
          npm install

Create a .env file inside the backend folder:
          MONGO_URI=your_mongodb_connection_string
          PORT=5000

Start the backend server:
          npm run dev

The backend will run at:
          http://localhost:5000


💻 Frontend Setup

Open another terminal and navigate to the frontend:
          cd frontend

Install frontend dependencies:
          npm install

Start the frontend development server:
          npm run dev

The frontend will run at:
          http://localhost:5173


🔌 API Documentation
Base URL
          http://localhost:5000/api/students

1. Get All Students
          GET /api/students
Retrieves all student records from the database.

2. Add a Student
          POST /api/students

Example request:
          {
            "name": "John Doe",
            "email": "john@example.com",
            "phone": "9876543210",
            "course": "Computer Science",
            "age": 21
          }

3. Update a Student
          PUT /api/students/:id
Updates the details of an existing student.

4. Delete a Student
          DELETE /api/students/:id
Deletes a student record using its unique ID.

🔄 CRUD Operations
The application implements the complete CRUD lifecycle:

                  CREATE
                     ↓
                  Add Student
                     ↓
                  MongoDB
                  
                  READ
                     ↓
                  Fetch Students
                     ↓
                  Display Records
                  
                  UPDATE
                     ↓
                  Edit Student
                     ↓
                  Update MongoDB
                  
                  DELETE
                     ↓
                  Delete Student
                     ↓
                  Remove From MongoDB


🧪 API Testing
The backend APIs can be tested using Postman.

Available operations:
          GET       /api/students
          POST      /api/students
          PUT       /api/students/:id
          DELETE    /api/students/:id
Postman can be used to verify API requests, responses, CRUD operations, and backend functionality independently from the frontend.


🔐 Environment Variables
The backend uses environment variables to protect sensitive configuration.
Example:
          MONGO_URI=your_mongodb_connection_string
          PORT=5000

The .env file should remain local and must not be uploaded to GitHub.
The root .gitignore contains rules to prevent sensitive environment files and dependency folders from being tracked.


📸 Screenshots
Add screenshots of your application below to showcase the user interface.

🏠 Student Management Dashboard
Add your dashboard screenshot here.

➕ Add Student
Add your Add Student screenshot here.

✏️ Edit Student
Add your Edit Student screenshot here.

📋 Student Records
Add your Student Records screenshot here.

🌟 Project Highlights
  🎓 Full-stack Student Management System
  ⚛️ Modern React frontend
  🟢 Node.js and Express.js backend
  🍃 MongoDB database integration
  🔗 RESTful API architecture
  ✏️ Complete CRUD operations
  📱 Responsive user interface
  📮 Postman API testing
  🔐 Environment variable configuration
  📦 Modular project structure
  🐙 Git and GitHub version control


🎯 Learning Outcomes

This project provided practical experience in:
- Building full-stack web applications
- Developing RESTful APIs using Node.js and Express.js
- Creating responsive React-based user interfaces
- Connecting the React frontend with backend APIs
- Working with MongoDB for persistent data storage
- Designing MongoDB schemas using Mongoose
- Implementing complete CRUD operations
- Handling API requests and responses
- Testing and validating APIs using Postman
- Managing environment variables securely
- Using Git and GitHub for version control
- Organizing a real-world project using a modular folder structure


🔮 Future Enhancements

The project can be further enhanced with:
  🔐 User authentication and authorization
  👤 Admin dashboard
  🔎 Advanced search and filtering
  📊 Student analytics and statistics
  📄 Export student records to PDF or Excel
  📚 Attendance management
  📝 Marks and performance tracking
  🔔 Notifications and alerts
  ☁️ Cloud deployment
  📱 Enhanced mobile responsiveness
  🚀 Future Vision


The Student Management System can be expanded into a complete academic management platform:

                      Student Management
                              ↓
                      Attendance Management
                              ↓
                      Marks & Performance
                              ↓
                      Course Management
                              ↓
                      Reports & Analytics
                              ↓
                      Admin Dashboard

This provides a strong foundation for developing a scalable academic management platform for educational institutions.

👩‍💻 Author
G S Netra
Computer Science Engineering Graduate

GitHub:
https://github.com/Netra2004

⭐ Repository
If you find this project useful or interesting, consider giving it a ⭐ star on GitHub.

Project Repository:
https://github.com/Netra2004/Student_Management_System

📄 License
This project was developed for educational and development purposes.
