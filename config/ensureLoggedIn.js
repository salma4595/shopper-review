// // ensureLoggedIn.js

// // Middleware for routes that require a logged in user
// module.exports = function(req, res, next) {
//     // Pass the req/res to the next middleware/route handler
//     if ( req.isAuthenticated() ) return next();
//     // Redirect to login if the user is not already logged in
//     res.redirect('/aot/google');
//   }

// ensureLoggedIn.js
// Middleware for routes that require a logged in user
module.exports = function(req, res, next) {
  // Check if the user is logged in
  if (req.isAuthenticated()) {
    // Check if the user has the "user" role
    if (req.user.userType === 'user' ) {
      // If the user is an admin, pass the req/res to the next middleware/route handler
      return next();
    } else {
      // If the user is not an admin, return a forbidden error
      return res.sendStatus(403);
    }
  } else {
    // Redirect to login if the user is not already logged in
    return res.redirect('/aot/google');
  }
};