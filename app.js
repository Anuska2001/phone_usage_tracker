const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

var mobileController = require('./controllers/mobileController.js')

const url = 'mongodb+srv://titu:titu@cluster0.2vfvu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url).then(()=>console.log('Database Connected...'))

app.use(express.json())
app.use(cors({origin: 'http://localhost:4200'}))

app.listen(3000, ()=> console.log('Server Up and Running!!'))

app.use('/records', mobileController)

