const express = require("express");
const db = require("./server/db/connection.js");
const PORT = 8000;
const app = express();
const cors = require("cors");
const { authenticateUser } = require("./server/middelwares/auth.js");
const authRoute = require("./server/routes/authRoute.js");
const languages = require("./server/routes/languages.js");
const courses = require("./server/routes/courses.js");
const videos = require("./server/routes/videos.js");

const teacher = require("./server/routes/teachers.js");
const student = require("./server/routes/students.js");
const Quiz = require("./server/routes/quizz.js");
const reclamationRoutes = require("./server/routes/reclamation.js");

const adminRoute = require("./server/routes/admin.js");

const stripe = require("./server/routes/stripe.js");
const QuesRoute = require("./server/routes/questions.js");

app.use(express.json());

app.use(cors());
app.use(express.static(__dirname + "/../client/dist"));

//auth route (public)
app.use("/auth", authRoute);

//Admin route
app.use("/admin", adminRoute);
// reclamation route
app.use("/rec", reclamationRoutes);
// questions route
app.use("/ques", QuesRoute);
// Quiz route
app.use("/quiz", Quiz);

//all routes below this middelware are secure
// app.use(authenticateUser);

app.use("/languages", languages);
app.use("/courses", courses);
app.use("/videos", videos);
app.use("/stripe", stripe);
app.use("/teacher", teacher);
app.use("/student", student);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
