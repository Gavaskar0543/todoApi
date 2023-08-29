const express = require('express');
const port  = 8000;
const app = express();
const cors = require('cors');
const serverless = require('serverless-http');
const db = require('./config/mongoose');
app.use(express.urlencoded());
app.use(cors());
app.use('/api/',require('./router'))
app.listen(port,function(err){
    if(err){
        console.log(err.message);
        return;
    }
    console.log(`server up on port:${port}`);
})
 const handler = serverless(app);
