const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Add third party middleware to log all requests to the console
app.use(logger('dev'));

// Add a static middleware to serve static files from the public directory
app.use(express.static('public'));

// Add third party middleware to parse the request body
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.status(200)
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})