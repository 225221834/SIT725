
const express = require("express");
const app = express();
const mongoose = require('mongoose'); 
const PORT = 3000;
const path = require("path");
const timestapmpRoutes = require('./routes/timestampRoutes');


// Middleware and static files
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/timestamps';
// Connect to MongoDB
mongoose.connect(mongoURL)

    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

// Routes
app.use('/api', timestapmpRoutes);
// Start the server
app.listen(PORT, () => { 
   console.log(`Server is running on http://localhost:${PORT}`);
})