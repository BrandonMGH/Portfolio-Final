const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
const path = require("path");
const PORT = process.env.PORT || 7070;
const app = express();
const creds = require('../portfolio-final/client/src/Components/Config/config');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}



// Define API routes here
app.get('/', (req, res) => {
  res.send('Hello')
})




// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});