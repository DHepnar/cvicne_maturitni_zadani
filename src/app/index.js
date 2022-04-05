const path = require('path'); 
 
const express = require('express'); 
const session = require('express-session');

const app = express(); 

const { secret } = require(path.join(__dirname, '..', 'config'));

const uzivatelRouter = require(path.join(__dirname, 'routers', 'uzivatelRouter.js'));
 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

app.use(session({
    secret: secret,
    secure: false,
    resave: false,
    saveUninitialized: false,
    cookie: { sameSite: 'strict'},
}));

app.use(express.static(path.join(__dirname, 'www'))); 
 
app.use('/uzivatel', uzivatelRouter);  

module.exports = app;