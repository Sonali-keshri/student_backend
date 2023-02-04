require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('./db/conn');
const students = require('./models/studentSchema');
const cors = require('cors');
const router = require('./routes/routers.js')

const port = process.env.PORT || 8003;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.json("server Start again ")
})
app.use(router);

app.listen(port, ()=>{
    console.log(`Server is Started on port ${port}`);
});