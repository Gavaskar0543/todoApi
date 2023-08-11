const express = require('expres');
const port  = 8000;
const app = express();
const db = require('./config/mongoose');

app.use('/',require('./router'))
app.listen(port,function(err){
    if(err){
        console.log(err.message);
        return;
    }
    consol.log(`server up on port:${port}`);
})