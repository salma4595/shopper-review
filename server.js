const express = require('express');
require('dotenv').config();

const app = express();

// Import and configre routes
const shopRouter = require('./routes/shop');

app.use('/shop', shopRouter);

// connect to db
const db = require('./config/db');

// Setup server
const PORT = process.env.PORT;
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});