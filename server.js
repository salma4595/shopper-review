const express = require('express');
require('dotenv').config();

//load express ejs layout
const expressLayouts = require('express-ejs-layouts')
///loading the session
const session = require('express-session')
///loading passport
const passport = require('passport')

// initialize Express
const app = express();
//port configuration 
const port = process.env.PORT;


require('./config/passport');
///we can configure and mount the session middleware
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}
)   )

///mount passport
app.use(passport.initialize());
app.use(passport.session());
///now user can be used in ejs template
app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
  })

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
const userRouter = require('./routes/user');
const reviewRouter=require('./routes/review')
app.use('/shop', shopRouter);
app.use("/", indexRouter);
app.use('/mall', mallRouter);
app.use('/user', userRouter)
app.use('/review', reviewRouter)






// Setup server
const PORT = process.env.PORT;
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});