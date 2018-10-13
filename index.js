require('dotenv').config({ path: '.env' });
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const router = require('./app/routes');
app.use('/', router);

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err)
    }
    console.log(`Server is listening on ${port}`)
});
