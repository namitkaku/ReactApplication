var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/EcommerceDB';
mongoose.connect(mongoDB , {useNewUrlParser : true , useUnifiedTopology: true},  (error) => {
    if(!error){
        console.log("Database Connected Successfully!");
    }
    else{
        console.log("Fail to connect");
    }
});