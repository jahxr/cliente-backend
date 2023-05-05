const express  = require('express');
const app      = express();
const client   = require('./routes/client');
const dealers  = require('./routes/dealers-router')
const database = require('./modules/database');
var bodyParse  = require('body-parser');
var cors       = require('cors');


app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));

//config
app.set('port', 3000);

//routes
app.use('/client', client);
app.use('/dealers', dealers)

//start server
app.listen(app.get('port'), () => {
    console.log("server in port:", app.get('port'));
    
});