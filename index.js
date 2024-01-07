const express = require("express");
const db = require("./server/db/connection.js");
const PORT = 8000;
const app = express();
const cors = require("cors");
const { authenticateUser } = require("./server/middelwares/auth.js");
const authRoute = require("./server/routes/authRoute.js");

app.use(express.json());

app.use(cors());
app.use(express.static(__dirname + "/../client/dist"));

//auth route (public)
app.use("/auth", authRoute);

//all routes below this middelware are secure
// app.use(authenticateUser);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
