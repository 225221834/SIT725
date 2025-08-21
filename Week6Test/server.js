var express = require("express");
const path = require("path"); // Make sure to include this
var app = express();
var port = process.env.port || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/multiply", (req, res) => {
    //defines a GET route at /multiply

    //extracts query parameters a and b from the URL
    //converts them from strings to floating-point numbers using parseFloat
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    //checks if input is not a number
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid input");
    }
    const result = a * b;

    res.type('html');
    res.send(`The multplication of ${a} and ${b} is: ${result}`);

});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
