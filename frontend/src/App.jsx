import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:5000/api/students";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    age: "",
  });

  const [editingId, setEditingId] = useState(null);

  // =========================
  // FETCH STUDENTS
  // =========================

  const fetchStudents = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }

      const result = await response.json();

      if (result.success) {
        setStudents(result.data);
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // =========================
  // FORM HANDLING
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // =========================
  // ADD / UPDATE
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    setSubmitting(true);

    try {
      const method = editingId ? "PUT" : "POST";

      const url = editingId
        ? `${API_URL}/${editingId}`
        : API_URL;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          course: formData.course.trim(),
          age: Number(formData.age),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        alert(result.message || "Something went wrong");
        return;
      }

      alert(
        editingId
          ? "Student updated successfully!"
          : "Student added successfully!"
      );

      resetForm();
      await fetchStudents();
    } catch (error) {
      console.error("Error saving student:", error);
      alert("Unable to connect to backend");
    } finally {
      setSubmitting(false);
    }
  };

  // =========================
  // DELETE
  // =========================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    setDeletingId(id);

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        alert(result.message || "Delete failed");
        return;
      }

      alert("Student deleted successfully!");

      await fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Unable to delete student");
    } finally {
      setDeletingId(null);
    }
  };

  // =========================
  // EDIT
  // =========================

  const handleEdit = (student) => {
    setEditingId(student._id);

    setFormData({
      name: student.name || "",
      email: student.email || "",
      phone: student.phone || "",
      course: student.course || "",
      age: student.age || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================
  // RESET
  // =========================

  const resetForm = () => {
    setEditingId(null);

    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      age: "",
    });
  };

  // =========================
  // GET INITIALS
  // =========================

  const getInitials = (name) => {
    if (!name) return "ST";

    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  // =========================
  // COURSE COLOR
  // =========================

  const getCourseClass = (course) => {
    const value = course?.toLowerCase() || "";

    if (value.includes("computer") || value === "cse") {
      return "course-blue";
    }

    if (value.includes("artificial") || value === "ai") {
      return "course-purple";
    }

    if (value.includes("information") || value === "ise") {
      return "course-cyan";
    }

    if (value.includes("electronics") || value === "ece") {
      return "course-orange";
    }

    if (value.includes("mechanical") || value === "me") {
      return "course-green";
    }

    return "course-pink";
  };

  return (
    <div className="app">

      {/* =========================
          HERO HEADER
      ========================= */}

      <header className="hero">

        <div className="hero-content">

          <div className="hero-text">

            <div className="brand-badge">
              <span className="brand-icon">🎓</span>
              Student Portal
            </div>

            <h1>
              Student
              <span> Management System</span>
            </h1>

            <p>
              Manage student records, courses and information
              with a simple and modern dashboard.
            </p>

          </div>

          <div className="hero-illustration">
            <div className="floating-card card-one">
              📚
            </div>

            <div className="graduation-icon">
              🎓
            </div>

            <div className="floating-card card-two">
              ✨
            </div>
          </div>

        </div>

      </header>

      <main className="container">

        {/* =========================
            DASHBOARD STATS
        ========================= */}

        <section className="stats-grid">

          <div className="stat-card stat-blue">

            <div className="stat-icon">
              👨‍🎓
            </div>

            <div>
              <p>Total Students</p>
              <h2>{students.length}</h2>
            </div>

          </div>

          <div className="stat-card stat-purple">

            <div className="stat-icon">
              📚
            </div>

            <div>
              <p>Courses</p>
              <h2>
                {new Set(
                  students.map((student) =>
                    student.course?.toLowerCase()
                  )
                ).size}
              </h2>
            </div>

          </div>

          <div className="stat-card stat-green">

            <div className="stat-icon">
              ✅
            </div>

            <div>
              <p>Active Records</p>
              <h2>{students.length}</h2>
            </div>

          </div>

          <div className="stat-card stat-orange">

            <div className="stat-icon">
              ⭐
            </div>

            <div>
              <p>System Status</p>
              <h2 className="status-text">
                Active
              </h2>
            </div>

          </div>

        </section>

        {/* =========================
            ADD / UPDATE FORM
        ========================= */}

        <section className="card form-card">

          <div className="section-heading">

            <div className="heading-icon">
              {editingId ? "✏️" : "➕"}
            </div>

            <div>
              <h2>
                {editingId
                  ? "Update Student"
                  : "Add New Student"}
              </h2>

              <p>
                {editingId
                  ? "Update the student's information below."
                  : "Enter student details to create a new record."}
              </p>
            </div>

            {editingId && (
              <button
                type="button"
                className="cancel-btn"
                onClick={resetForm}
                disabled={submitting}
              >
                Cancel
              </button>
            )}

          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="form-group">
                <label htmlFor="name">
                  Student Name
                </label>

                <div className="input-wrapper">
                  <span>👤</span>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter student name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <div className="input-wrapper">
                  <span>📧</span>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <div className="input-wrapper">
                  <span>📱</span>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="course">
                  Course
                </label>

                <div className="input-wrapper">
                  <span>📚</span>

                  <input
                    id="course"
                    type="text"
                    name="course"
                    placeholder="e.g. CSE, AI, ECE"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group age-field">
                <label htmlFor="age">
                  Age
                </label>

                <div className="input-wrapper">
                  <span>🎂</span>

                  <input
                    id="age"
                    type="number"
                    name="age"
                    placeholder="Enter age"
                    value={formData.age}
                    onChange={handleChange}
                    min="1"
                    max="100"
                    required
                  />
                </div>
              </div>

            </div>

            <button
              className="submit-btn"
              type="submit"
              disabled={submitting}
            >
              <span>
                {submitting
                  ? editingId
                    ? "Updating..."
                    : "Adding..."
                  : editingId
                  ? "✓ Update Student"
                  : "+ Add Student"}
              </span>
            </button>

          </form>

        </section>

        {/* =========================
            STUDENT RECORDS
        ========================= */}

        <section className="card records-card">

          <div className="section-heading">

            <div className="heading-icon records-icon">
              👨‍🎓
            </div>

            <div>
              <h2>Student Records</h2>
              <p>
                View and manage all registered students.
              </p>
            </div>

            <div className="student-count">
              {students.length}
              <span>
                {students.length === 1
                  ? " Student"
                  : " Students"}
              </span>
            </div>

          </div>

          {loading ? (

            <div className="empty-state">
              <div className="loading-circle">
                ⏳
              </div>

              <h3>Loading students...</h3>

              <p>
                Please wait while we load the records.
              </p>
            </div>

          ) : students.length === 0 ? (

            <div className="empty-state">

              <div className="empty-icon">
                👨‍🎓
              </div>

              <h3>No students yet</h3>

              <p>
                Add your first student using the form above.
              </p>

            </div>

          ) : (

            <div className="table-container">

              <table>

                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Course</th>
                    <th>Age</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>

                  {students.map((student) => (

                    <tr key={student._id}>

                      <td>

                        <div className="student-info">

                          <div className="avatar">
                            {getInitials(student.name)}
                          </div>

                          <div>
                            <strong>
                              {student.name}
                            </strong>

                            <small>
                              Student
                            </small>
                          </div>

                        </div>

                      </td>

                      <td>
                        <span className="email-text">
                          {student.email}
                        </span>
                      </td>

                      <td>
                        {student.phone}
                      </td>

                      <td>

                        <span
                          className={`course-badge ${getCourseClass(
                            student.course
                          )}`}
                        >
                          {student.course}
                        </span>

                      </td>

                      <td>

                        <span className="age-badge">
                          {student.age}
                        </span>

                      </td>

                      <td>

                        <div className="actions">

                          <button
                            type="button"
                            className="action-edit"
                            onClick={() =>
                              handleEdit(student)
                            }
                            disabled={
                              deletingId === student._id
                            }
                          >
                            ✏️ Edit
                          </button>

                          <button
                            type="button"
                            className="action-delete"
                            onClick={() =>
                              handleDelete(student._id)
                            }
                            disabled={
                              deletingId === student._id
                            }
                          >
                            {deletingId === student._id
                              ? "Deleting..."
                              : "🗑️ Delete"}
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </section>

      </main>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="footer-content">

          <div>
            <strong>🎓 Student Management System</strong>
            <p>
              A modern MERN stack student management application.
            </p>
          </div>

          <div className="footer-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Student Management System
        </div>

      </footer>

    </div>
  );
}

export default App;