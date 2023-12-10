const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.connectionString)
.then(() => {
    console.log('MongoDB Connected');
})
.catch((err) => {
    console.log('Connection failed, reason\n' + err);
})