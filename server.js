const express = require("express");
const http = require("http");
const app = express();
const path = require('path')
const bodyParser =require('body-parser')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

var httpServer = http.createServer(app);
app.use(bodyParser.json());
app.get('/', (req, res)=>{
    res.render("close.html");
})

httpServer.listen(3008, ()=>console.log('http success'));
