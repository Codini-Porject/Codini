const express = require("express");
const db = require("./server/db/connection.js");
const PORT = 8000;
const app = express();
const cors = require("cors");
const { authenticateUser } = require("./server/middelwares/auth.js");
const authRoute = require("./server/routes/authRoute.js");
const languagesRouter = require("./server/routes/languages.js");
const coursesRouter = require("./server/routes/courses.js");
const videosRouter = require("./server/routes/videos.js");
const teacherRouter = require("./server/routes/teachers.js");
const studentRouter = require("./server/routes/students.js");


app.use(express.json());

app.use(cors());
app.use(express.static(__dirname + "/../client/dist"));

//auth route (public)
app.use("/auth", authRoute);

app.use("/languages", languagesRouter);
app.use("/courses", coursesRouter);
app.use("/videos", videosRouter);
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);



//all routes below this middelware are secure
// app.use(authenticateUser);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
