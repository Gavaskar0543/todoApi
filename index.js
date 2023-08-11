const express = require('express');
const port  = 8000;
const app = express();
const db = require('./config/mongoose');

//app.use('/',require('./router'))
app.listen(port,function(err){
    if(err){
        console.log(err.message);
        return;
    }
    console.log(`server up on port:${port}`);
})