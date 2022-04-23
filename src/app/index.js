const path = require('path'); 
 
const express = require('express'); 
const session = require('express-session');

const app = express(); 

const { secret } = require(path.join(__dirname, '..', 'config'));

const uzivatelRouter = require(path.join(__dirname, 'routers', 'uzivatelRouter.js'));
const prispevekRouter = require(path.join(__dirname, 'routers', 'prispevekRouter.js'));
 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (dotaz, odpoved) => odpoved.redirect('/uzivatel'));

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
app.use('/prispevky', prispevekRouter);

module.exports = app;