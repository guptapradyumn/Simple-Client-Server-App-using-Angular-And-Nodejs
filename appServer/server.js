const express = require('express');
const cors = require('cors');
var APIroutes= require('./router/routes.js');

const app = express();

app.use('/api',APIroutes);
app.use(cors({origin: 'http://localhost:4200'})); 
app.listen(3000, ()=> {

    console.log('server is running on a port number:',3000);
});