const router = require('express').Router();

const db = require("../models");

// GET / find - get last workout
// find({}).sort({date: -1}).limit(1)
router.get('/workouts', (req, res) => {
  db.Workout.find({}, (err, lastWorkoutData) => {
    if (err){
      console.log(err);
      return res.status(400).json(err);
    }
    res.json(lastWorkoutData);
  })
})
// PUT / update - add exercise to last workout
router.put('/workouts/:id', (req, res) => {
  db.Workout.update({_id: req.params.id}, {$push: { exercises: req.body}})
  .then( updateData => {
    res.json(updateData);
  })
  .catch(err => {
    res.json(err);
  })
})

// POST / create - create new workout
router.post('/workouts', (req, res) => {
  db.Workout.create(req.body)
  .then(newWorkout => {
    res.json(newWorkout);
  })
  .catch(err => {
    console.log(err);
    res.json(err);
  })
});

// GET /find - get workouts
router.get('/workouts/range', (req, res) => {
  db.Workout.find().sort({day: -1}).limit(7)
  .then(WorkoutData => {
    //console.log(WorkoutData);
    return res.json(WorkoutData);
  })
  .catch(err => {
    if (err){
      console.log(err);
      return res.status(500).json(err);
    }
  })
});

module.exports = router;