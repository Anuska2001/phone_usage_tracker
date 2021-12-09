const express = require('express');
var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var {Mobile} = require('../models/mobile.js')

router.get('/',(req,res)=>{
    Mobile.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log('error' + JSON.stringify(err,undefined,2));
        }
    });
});

router.post('/', (req,res)=>{
    var mob = new Mobile({
        name: req.body.name,
        time: req.body.time,
        date: req.body.date.toLocaleString('en-IN'),
        mood: req.body.mood
    })
    mob.save((err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            console.log('error' + JSON.stringify(err,undefined,2));  
        }
    })
})

module.exports = router;