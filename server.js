const express = require('express');

const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));



mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {console.log(`Database is listening and Running on port ${port}`)}); 
    }
})

