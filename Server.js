const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'media')));

app.listen(80,() => console.log("Listining..."));

// Other routes and server logic
