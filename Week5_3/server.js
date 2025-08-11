
var express = require("express")
var app = express()
var PORT = 3000;

// Mount the route file
let foodRoute = require('./routes/food')

//Mount the route at /api/projects
app.use('/api/food', foodRoute);

// Root the route
app.get('/', (req, res) => {
res.send('Welcome to Food Home Page!');
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
