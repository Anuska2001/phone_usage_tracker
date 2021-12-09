const mongoose = require('mongoose')

var Mobile = mongoose.model('Mobile',{
    name: {type: String},
    time: {type: Number},
    date: {type: Date},
    mood: {type: String}
});

module.exports = {Mobile};