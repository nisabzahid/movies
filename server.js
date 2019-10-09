const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = ('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://db:passwordtooeasy@cluster0-jsrb7.mongodb.net/actor?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDb connection stablished successfully");
});

const actorRouter = require('./routes/actors.js');
app.get('/api/actors', actorRouter);


const signupRouter = require('./routes/signup.js');
app.post('/api/user/signup', signupRouter);

const loginRouter = require('./routes/login.js');
app.post('/api/user/login', loginRouter);

const moviesRouter = require('./routes/movies.js'); // add movies.js file
app.get('/api/movies', moviesRouter);



const port = 5000;

app.listen(port, () => {
    console.log(` server is running at ${port}`);
});