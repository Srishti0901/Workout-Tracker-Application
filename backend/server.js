require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const workoutRoutes = require('./routes/workout');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

mongoose.connect('mongodb+srv://Workout:Workout123@cluster0.h6vo9xp.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
})
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    })

