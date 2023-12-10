const express = require('express');
require('dotenv').config();

//load express ejs layout
const expressLayouts = require('express-ejs-layouts')
// initialize Express
const app = express();
//port configuration 
const port = process.env.PORT;

//Node.js look into the folder called views for all the ejs files 
app.set("view engine", "ejs");

//Node.js to look for all the files (CSS,JS,AuDIO,Vedios, Images)
app.use(express.static("public"));

//Nodejs to look into views folder for the file named layout.ejs
app.use(expressLayouts)

// connect to db
const db = require('./config/db');

// //import and configure routes
const indexRouter = require('./routes/index');
const mallRouter= require("./routes/mall");
const shopRouter = require('./routes/shop');

app.use('/shop', shopRouter);
app.use("/", indexRouter);
app.use('/mall', mallRouter);

// Setup server
const PORT = process.env.PORT;
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});