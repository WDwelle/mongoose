const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.listen(8000, () => console.log("The server is all fired up on port 8000"));