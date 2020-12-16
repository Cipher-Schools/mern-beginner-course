const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');

const db_url = 'mongodb+srv://new-user-123:new-user-123@testcluster.vyftd.mongodb.net/backend-db?retryWrites=true&w=majority';

mongoose.connect(db_url , { useNewUrlParser: true, useUnifiedTopology: true }, () =>{
    console.log('*******Connection established to DB************');
})

const app = express();
// CrossOrigin Resources
app.use(cors());

// middleware of body parser
app.use(bodyParser.json());

// Form: /api/avengers
app.use('/api', routes);

// error handler middleware
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
})



app.listen(3001, () => {
    console.log('Listening at port number 3001');
})