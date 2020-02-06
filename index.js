//import the module
const express = require('express');
const http = require('http');
//create an express object
const app = express();

//listen to a PORT
app.listen(3000, () => console.log("listening on 3000"));

//set up the application middleware using app.use()
/*Middleware functions are functions that have access to the request object (req),
  the response object (res), and the next middleware function in the application’s request-response cycle.*/
// app.use((req, res, next) => {
//   console.log(`${req.method} for ${req.url}`);
//   next();
// });
app.get('/', function(req, res) {
  res.sendFile('public/index.html', {
    root: __dirname
  })
});

//host the static folder
app.use(express.static('public'));