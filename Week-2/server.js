/*const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));
// In-memory array to store quotes
let quotes = [
"The best way to predict the future is to invent it.",
"Life is 10% what happens to us and 90% how we react to it.",
"The only limit to our realization of tomorrow is our doubts of today.",
"Do not wait to strike till the iron is hot; but make it hot by striking."
];
// GET endpoint to retrieve a random quote
// Usage example: http://localhost:3000/api/quote
app.get('/api/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
})

// Optional: POST endpoint to add a new quote
// Example POST body: { "quote": "Your new inspirational quote." }
app.post('/api/quote', (req, res) => {
  const { quote } = req.body;
  if (!quote || typeof quote !== 'string') {
    return res.status(400).json({ error: 'Please provide a valid quote.' });
  }
  quotes.push(quote);
  res.json({ message: 'Quote added successfully.', quotes });
});

// Additional example endpoint to check server health
app.get('/health', (req, res) => {
  res.send('Server is healthy!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});*/

// Import the Express module so we can create a web server.
const express = require('express');
// Import Node.js's built-in 'path' module to help with file paths.
const path = require('path');
// Create an instance of an Express application.
const app = express();
// Define the port number to listen on.
// It uses an environment variable PORT if provided; otherwise, it defaults to 3000.
const PORT = process.env.PORT || 3000;

// Create a GET endpoint at /add
/*app.get('/add', (req, res) => {
// Parse the numbers from the query parameters
const a = parseFloat(req.query.a);
const b = parseFloat(req.query.b);
// Calculate the sum
const sum = a + b;*/


// Set up middleware to serve static files from the "public" folder.
// This means that when a request is made to the root URL ("/"),
// Express will look for a file named index.html (or other static assets) inside the "public" directory.
app.use(express.static(path.join(__dirname, 'public')));
// Define a GET endpoint at '/square' that calculates the square of a number.
// The endpoint expects a query parameter 'num', e.g., /square?num=5
app.get('/calculate', (req, res) => {
// Extract the 'num' query parameter from the request and convert it to a floating point number.
const num1 = parseFloat(req.query.num1);
const num2 = parseFloat(req.query.num2);
// Check if 'num' is not a valid number. If it's not, send an error message as the response.
if (isNaN(num1)||isNaN(num2)) {
return res.send("Error: Please provide a valid number using query parameter 'num'.");
}
// Calculate the sum of 2 numbers.
const sum = num1 + num2;
const mul=num1*num2;
const sub = num1-num2;
// Send a plain text response showing the result.
res.type('html');
res.send(`The sum of number 1: ${num1} 
          and number 2: ${num2} is: ${sum}<br><br>
          Their multiplication is: ${mul}<br><br>
          Their Subraction is: ${sub}`);
});

// Start the server and have it listen on the specified port.
// Once the server is running, log a message to the console indicating where it's accessible.
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
