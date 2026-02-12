
// Import React and hooks
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Environment variable for API URL (defaults to localhost for development)
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  // storing the students list [ ]
  const [students, setStudents] = useState([]);

  //handling form inputs { name: '', email: '', course: '' }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: ''
  });


  // Fetch students when loading components

  useEffect(() => {
    fetchStudents();
  }, []);

  // Function to fetch data from backend
  const fetchStudents = async () => {
    try {
      const response = await fetch(`${API_URL}/students`);
      const data = await response.json();
      setStudents(data); // Update students
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };


  // updating data while user type

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // Update field
    });
  };


  // Submit the form to add a student

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch(`${API_URL}/students`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      if (response.ok) {
        // Clear the form
        setFormData({ name: '', email: '', course: '' });
        // Refresh the student list
        fetchStudents();
      } else {
        alert('Failed to add student');
      }
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };


  //Delete a student

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      const response = await fetch(`${API_URL}/students/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Refresh the student list
        fetchStudents();
      } else {
        alert('Failed to delete student');
      }
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };


  return (
    <div className="container">
      <h1>Student Management System</h1>
      {/* Student Form Section */}
      <div className="form-container">
        <h2>Add Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label>Course:</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Enter course"
              required
            />
          </div>
          <button type="submit" className="btn-add">Add Student</button>
        </form>
      </div>

      {/* Student List Section */}
      <div className="list-container">
        <h2>Student List</h2>
        {students.length === 0 ? (
          <p>No students found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>
                  <td>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
