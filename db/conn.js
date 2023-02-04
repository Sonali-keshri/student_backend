const mongoose = require('mongoose');

const dbUrl = process.env.DB;

mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("DB Connected Sucessfully")).catch((error)=> console.log(error.message))

