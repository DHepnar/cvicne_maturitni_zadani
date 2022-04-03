const path = require('path'); 
 
const express = require('express'); 
 
const app = express(); 

const uzivatelRouter = require(path.join(__dirname, 'routers', 'uzivatelRouter.js'));
 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public'))); 
 
app.use('/uzivatel', uzivatelRouter);  

module.exports = app;