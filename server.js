// const express = require("express");
// const bodyParser = require("body-parser");
// const fs = require("fs");
// const app = express();
// const port = 3000;

// // Middleware to parse form data
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve the HTML form
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/form.html");
// });

// // Handle form submission
// app.post("/submit", (req, res) => {
//   const formData = req.body;

//   // Read existing data
//   fs.readFile("data.json", (err, data) => {
//     let users = [];
//     if (!err && data.length > 0) {
//       users = JSON.parse(data);
//     }

//     // Add new user data
//     users.push(formData);

//     // Write to JSON file
//     fs.writeFile("data.json", JSON.stringify(users, null, 2), (err) => {
//       if (err) {
//         res.send("Error saving data");
//       } else {
//         res.send("Registration successful!");
//       }
//     });
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

// Handle form submission
app.post("/submit", (req, res) => {
  const formData = req.body;

  // Read existing data
  fs.readFile("data.json", (err, data) => {
    let users = [];
    if (!err && data.length > 0) {
      users = JSON.parse(data);
    }

    // Add new user data
    users.push(formData);

    // Write to JSON file
    fs.writeFile("data.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        res.send("Error saving data");
      } else {
        // Send the updated data back to the client
        res.json(users); // Send the updated users array as JSON
      }
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});