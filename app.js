const express = require('express');
const studentRoutes = require('./routes/studentRoutes');
const logger = require('./middleware/logger');

const app = express();
const PORT = 3000;

// Built-in middleware
app.use(express.json());

// Custom logger middleware
app.use(logger);

// Modular student routes
app.use('/students', studentRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// General error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Student Management API running at http://localhost:${PORT}`);
});
