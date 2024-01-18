const express = require("express");
const db = require("./server/db/connection.js");
const PORT = 8000;
const app = express();
const cors = require("cors");
const axios = require("axios");
const { authenticateUser } = require("./server/middelwares/auth.js");
const authRoute = require("./server/routes/authRoute.js");
const languagesRouter = require("./server/routes/languages.js");
const coursesRouter = require("./server/routes/courses.js");
const videosRouter = require("./server/routes/videos.js");

const teacherRouter = require("./server/routes/teachers.js");
const studentRouter = require("./server/routes/students.js");
const Quiz = require("./server/routes/quizz.js");
const reclamationRoutes = require("./server/routes/reclamation.js");

const adminRoute = require("./server/routes/admin.js");

const stripe = require("./server/routes/stripe.js");
const QuesRoute = require("./server/routes/questions.js");
const reviews = require("./server/routes/reviews.js");

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
//
app.use("/Reviews", reviews);

//all routes below this middelware are secure
// app.use(authenticateUser);

app.use("/languages", languagesRouter);
app.use("/courses", coursesRouter);
app.use("/videos", videosRouter);
app.use("/stripe", stripe);
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);

//////////////////////////////////////////////

const CHAT_ENGINE_PROJECT_ID = `ef2eab1d-2c81-4699-bb60-9bfac5601021`;

const CHAT_ENGINE_PRIVATE_KEY = "87ab4cba-ba46-433d-a4a2-f97fc0a81938";

app.post("/signup", async (req, res) => {
  const { username, secret, email, first_name, last_name } = req.body;

  // Store a user-copy on Chat Engine!
  // Docs at rest.chatengine.io
  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username, secret, email, first_name, last_name },
      { headers: { "Private-Key": CHAT_ENGINE_PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.post("/login", async (req, res) => {
  const { username, secret } = req.body;

  try {
    const authObject = { "Private-Key": CHAT_ENGINE_PRIVATE_KEY };
    const data = {
      username: username,
      secret: secret,
    };

    const r = await axios.put("https://api.chatengine.io/users/", data, {
      headers: authObject,
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
