const express = require('express');
const connectDB = require('./database/connectdb.js');
const cookieParser = require('cookie-parser')

const app = express()  
app.use(cookieParser())
var session = require('express-session')
var flash = require('connect-flash');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));
app.use(flash())
const port = process.env.PORT || 3001

const web = require('./routes/web.js')   


var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))

app.use('/',web);      

app.set('view engine','ejs'); 



app.use(express.static('public'))

connectDB();


app.listen(port, () => {
    console.log(`APP LISTENING ON PORT ${port}`)
  })

