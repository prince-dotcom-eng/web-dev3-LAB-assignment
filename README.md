# Student Management REST API

Lab Assignment 2 – Web Dev III (Node.js & Express Backend)

## Requirements
- Node.js
- Express.js
- Postman
- No database
- Array and JSON data only

## Project Structure

```text
student-management-rest-api/
├── app.js
├── package.json
├── README.md
├── routes/
│   └── studentRoutes.js
├── middleware/
│   └── logger.js
└── data/
    └── students.js
```

## Run the Project

Open the terminal in this folder and run:

```bash
npm install
npm start
```

Server:
`http://localhost:3000`

## API Testing in Postman

### 1. Get all students
GET `http://localhost:3000/students`

### 2. Get student by ID
GET `http://localhost:3000/students/1`

### 3. Create student
POST `http://localhost:3000/students`

Body → raw → JSON:

```json
{
  "name": "Amit Kumar",
  "age": 20,
  "course": "B.Tech CSE AI/ML",
  "email": "amit@example.com"
}
```

Expected status: 201

### 4. Update student
PUT `http://localhost:3000/students/1`

Body → raw → JSON:

```json
{
  "name": "Rahul Sharma Updated",
  "age": 21,
  "course": "B.Tech CSE AI/ML",
  "email": "rahul.updated@example.com"
}
```

Expected status: 200

### 5. Delete student
DELETE `http://localhost:3000/students/1`

Expected status: 200

## Error Status Codes
- 200 - Success
- 201 - Created
- 400 - Bad Request
- 404 - Not Found
- 500 - Internal Server Error
