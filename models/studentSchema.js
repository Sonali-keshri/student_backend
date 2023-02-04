const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
        required:false,
    },
    lastName:{
        type:String,
        required:true
    },
    subject:{
       type:String,
       required:true
    },
    division:{
        type:String,
        required:true
    },
    rollNumber:{
        type:String,
        required:true
    }
    
})

const students = new mongoose.model('students', studentSchema)
module.exports = students;