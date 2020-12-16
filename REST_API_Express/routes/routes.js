const express = require('express');
const Avenger = require('../models/avenger');

const routes = express.Router();

// GET Request
routes.get('/avengers', (req, res) => {
    Avenger.find({}).then( (data) => {
        res.send(data);
    })
})

// POST Request route
routes.post('/avengers', (req, res, next)=>{
    console.log(req.body);
    // let's save to database
    // const newAvenger = new Avenger(req.body);
    // newAvenger.save().then((data)=> {
    //     res.send(data);
    // });
    // res.send({ msg: 'Check your backend console'});
    Avenger.create(req.body).then( (data) => {
        res.send(data)
    }).catch(next)
});

// PUT request Route
// Route parameters - /api/avengers/:id  /api/avengers/23   /api/avengers/45
routes.put('/avengers/:id', (req, res, next) => {
    console.log(req.body, req.params, req.params.id);
    Avenger.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then( (data) => {
        res.send(data);
    }).catch(next);
})

// Delete Request
routes.delete('/avengers/:id', (req, res, next) => {
    console.log(req.body, req.params, req.params.id);
    Avenger.findByIdAndDelete({_id: req.params.id}).then( (data) => {
        res.send(`Data deleted: ${data}`);
    }).catch(next)
})

module.exports = routes;