const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');

const PORT = process.env.PORT || 3000;

const Workout = require("./models/workoutModel");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// ROUTES

// HTML ROUTES
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
}) //is this necessary

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + '/public/stats.html'))
})

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + '/public/exercise.html'))
})

// GET / find - get last workout
// find({}).sort({date: -1}).limit(1)
app.get('/api/workouts', (req, res) => {
  Workout.find({}, (err, lastWorkoutData) => {
    if (err){
      console.log(err);
      return res.status(400).json(err);
    }
    res.json(lastWorkoutData);
  })
})
// PUT / update - add exercise to last workout

// POST / create - create new workout
app.post('/api/workouts', (req, res) => {
  Workout.create(req.body)
  .then(newWorkout => {
    res.json(newWorkout);
  })
  .catch(err => {
    console.log(err);
    res.json(err);
  })
});

// GET /find - get all workouts
app.get('/api/workouts/range', (req, res) => {
  Workout.find({}, (err, lastWorkoutData) => {
    if (err){
      console.log(err);
      return res.status(400).json(err);
    }
    res.json(lastWorkoutData);
  })
})

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
