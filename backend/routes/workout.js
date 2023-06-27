const express = require('express');
const requireAuth = require('../middleware/requireAuth');
const { createWorkout, getWorkout, getWorkouts, deleteWorkout, UpdateWorkout } = require('../controllers/workoutController');
const router = express.Router();

router.use(requireAuth);

router.get('/', getWorkouts);

router.get('/:id', getWorkout);

router.post('/', createWorkout);

router.delete('/:id', deleteWorkout);

router.patch('/:id', UpdateWorkout);



module.exports = router;