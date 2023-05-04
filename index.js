const express  = require('express');
const app      = express();
const client   = require('./routes/client');
//const database = require('./modules/database');

//config
app.set('port', 3000);

//routes
app.use('/client', client);

//start server
app.listen(app.get('port'), () => {
    console.log("server in port:", app.get('port'));
    console.log("connecting to database...");
});