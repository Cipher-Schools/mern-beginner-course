const express = require('express');
const Avenger = require('../models/avenger');

const routes = express.Router();

// POST Request route
routes.post('/avengers', (req, res)=>{
    console.log(req.body);
    // let's save to database
    // const newAvenger = new Avenger(req.body);
    // newAvenger.save().then((data)=> {
    //     res.send(data);
    // });
    // res.send({ msg: 'Check your backend console'});
    Avenger.create(req.body).then( (data) => {
        res.send(data)
    })

});

module.exports = routes;