# 🎓 Student Management System

responsive,modern web page for comprehensive full-stack application for managing student records.


Project Overview
Student Management System is a full-stack web application designed to demonstrate core concepts of web development, including RESTful API design, frontend-backend integration, state management, and responsive UI design.

The application allows users to:

Add        new students with validation.
View     a dynamic list of all students.
Delete     student records.
Process    student marks via a standalone Python utility.

It features a Python Flask backend serving a React (Vite) frontend, styled with custom CSS for a professional look.

---

Technologies Used

Backend
Python 3.x: Core programming language.
Flask: Lightweight WSGI web application framework.
Flask- CORS: Extension for handling Cross Origin Resource Sharing (CORS).
UUID:  For generating unique student identifiers.

Frontend
React.js: JavaScript library for building user interfaces.
Vite:     Next Generation Frontend Tooling for fast builds.
CSS3:     Custom responsive styling with a modern color palette.

Utilities
Standalone Script: A Python script for processing and calculating student mark statistics.


Features

CRUD Operations:   Create, Read, and Delete student records.
Real-time Updates: The UI automatically refreshes without page reloads after additions or deletions.
Input Validation:  Ensures data integrity on both frontend and backend.
Responsive Design: Optimized for desktops, tablets, and mobile devices.
In-Memory Storage: Uses a Python list structure for data persistence (simulated database).
Marks Processor:   A separate module to calculate average, highest, and lowest marks with validation.




Folder Structure

student-management-app/
│
├── backend/                # Python Flask API
│   ├── app.py              # Main application entry point
│   ├── process_marks.py    # Utility script for processing marks
│   └── requirements.txt    # Backend dependencies
│
├── frontend/               # React Vite FrontendApplication
│   ├── src/
│   │   ├── App.jsx         # Main React Component
│   │   ├── App.css         # Component-specific styles
│   │   ├── index.css       # Global styles
│   │   └── main.jsx        # React entry point
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
│
└── README.md               # Project Documentation




API Endpoints

The backend exposes the following RESTful endpoints:

| Method | Endpoint         | Description            | Body Parameters                                   |
                                                     
| GET    | `/students`      | Retrieve all students  | None                                               |
| POST   | `/students`      | Add a new student      | `{"name": "...", "email": "...", "course": "..."}` |
| DELETE | `/students/<id>` | Delete a student by ID | None                                               |



Marks Processor

The project includes a Python script to demonstrate algorithmic logic and error handling.


Input:  Enter comma-separated marks (e.g., `85, 90, 45, val`).
Output: Returns statistics like Average, Highest/Lowest Mark, and Pass/Fail counts.



Video Explanation

*[Insert link to your video demonstration here]*



**[P.Abishanan]**
Tech Lecturer Applicant
*Created for the Interview Assessment.*
