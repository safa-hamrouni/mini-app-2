const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./client/dist"));

// Define your routes here

app.listen(port, () => {
  console.log("Listening at http://localhost:" + port);
});
