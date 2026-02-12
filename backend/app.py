from flask import Flask, request, jsonify
from flask_cors import CORS
import uuid

# Initialize Flask App
app = Flask(__name__)

# Enable CORS (Cross-Origin Resource Sharing)
# This allows frontend applications running on different ports (e.g., React on 5173) to access this API.
CORS(app)

# In-memory storage for students

students = []


#Retrieve a list of all students.

@app.route('/students', methods=['GET'])
def get_students():
    # Return the list of students as JSON
    return jsonify(students), 200


@app.route('/students', methods=['POST'])
def add_student():
    # Get JSON data
    data = request.get_json()

    # validation for Check if all required fields are present
    if not data or 'name' not in data or 'email' not in data or 'course' not in data:
        return jsonify({"error": "Missing required fields: name, email, course"}), 400

    # Generate a ID 
    student_id = str(uuid.uuid4())

    # Create a new student list
    new_student = {
        "id": student_id,
        "name": data['name'],
        "email": data['email'],
        "course": data['course']
    }

    # Add the new student to memory list
    students.append(new_student)

    # Return the created student with a 201 status code
    return jsonify(new_student), 201


# Delete a student by their ID.


@app.route('/students/<string:student_id>', methods=['DELETE'])
def delete_student(student_id):
    global students
    # Find student with given ID
    student_to_delete = None
    for student in students:
        if student['id'] == student_id:
            student_to_delete = student
            break
    
    # If student found, remove from list
    if student_to_delete:
        students.remove(student_to_delete)
        return jsonify({"message": f"Student with id {student_id} deleted successfully"}), 200
    else:
        # If not found, return 404 Not Found
        return jsonify({"error": "Student not found"}), 404

# Run the application
if __name__ == '__main__':
    # debug=True allows the server to auto-reload on code changes
    print("Server running on http://127.0.0.1:5000")
    app.run(debug=True)
