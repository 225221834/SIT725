
var express = require("express")
var app = express()
var PORT = 3000;

// Mount the route file
let projectsRoute = require('./routes/projects')

//Mount the route at /api/projects
app.use('/api/projects', projectsRoute);

// Root the route
app.get('/', (req, res) => {
res.send('Welcome to the Home Page!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
