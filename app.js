const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// store in arry in student recode 
let students = [];

// get all student records
app.get('/students', (req, res) => {
  res.json(students);
});

// add a new student record
app.post('/students', (req, res) => {
  const student = req.body;
  students.push(student);
  res.status(201).json({ message: 'Student added successfully!' });
});

// API endpoint to delete a student record by ID
app.delete('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  students = students.filter((student) => student.id !== studentId);
  res.json({ message: 'Student deleted successfully!' });
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
