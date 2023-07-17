require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");

const uri = process.env.mongodbString;

const User = require("./schemas/userSchema");
const MovieFeedback = require("./schemas/movieFeedbackSchema");

const PORT = process.env.PORT || 4001;

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(passport.initialize());

const LocalStrategy = require("passport-local").Strategy;
passport.use(new LocalStrategy(User.authenticate()));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/movieFeedback/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, movieFeedback, movieTitle, movieImage } = req.body;
    await MovieFeedback.create({
      movieId: id,
      userName,
      movieFeedback,
      movieTitle,
      movieImage,
    });
    res.json({ success: true, message: "Feedback saved successfully" });
  } catch (err) {
    res.json({ success: false, message: "Failed to save feedback" });
  }
});

app.get("/feedbackData", async (req, res) => {
  res.json(await MovieFeedback.find({}));
});

app.post("/register", function (req, res) {
  User.register(
    new User({ username: req.body.username, email: req.body.email }),
    req.body.password,
    function (err, user) {
      if (err) {
        res.json({
          success: false,
          message: "Your account could not be saved. Error: " + err,
        });
      } else {
        res.json({ success: true, message: "Saved" });
      }
    }
  );
});

app.post("/login", function (req, res) {
  if (!req.body.username) {
    res.json({ success: false, message: "Username was not given" });
  } else if (!req.body.password) {
    res.json({ success: false, message: "Password was not given" });
  } else {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!user) {
          res.json({
            success: false,
            message: "username or password incorrect",
          });
        } else {
          res.json({
            success: true,
            message: "Authentication successful",
          });
        }
      }
    })(req, res);
  }
});

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  mongoose.connect(uri);
});
