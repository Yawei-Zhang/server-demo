require('dotenv').config({path:__dirname+'/./../.env'});
const express = require('express');
const app = express();
const port = 8080;

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});


var userRouter = require('./app/routes/user');
app.use('/user', userRouter);

var indexRouter = require('./app/routes/index');
app.use('/', indexRouter);
