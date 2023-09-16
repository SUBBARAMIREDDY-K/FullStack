const startupDebugger = require('debug')('app:starup');
const dbDebugger = require('debug')('app:db');
const config = require('config');
const Joi=require('joi');
const logger=require('./middleware/logger')
const express = require('express'); //function
const helmet = require('helmet');
const  morgan = require('morgan');
const courses=require('./routes/courses');
const home=require('./routes/home');

const app=express(); //return object
app.set('view engine','pug') //Internally Express will Load this Module
app.set('views','./views') //default

console.log(`NODE_ENV: ${process.env.NODE_ENV}`)

console.log(`APP: ${app.get('env')}`)


app.use(express.json()); //middleware function

app.use(express.urlencoded({extended: true})); //middle value key=value&key=value

app.use(express.static('public'));
app.use(helmet());
app.use(logger);
app.use('/api/courses',courses)
app.use('/',home);

//Configuration
console.log("Application Name : "+config.get('name'));
console.log("Mail Server: "+config.get('mail.host'));
console.log("Mail Server: "+config.get('mail.password'));

if(app.get('env')==='development') {
    app.use(morgan('tiny'));
    startupDebugger("Morgan enabled.......")
}

dbDebugger("Database  Debugging")

 




app.get('/',(req,res) => {
    res.render('index',{title:"My Express App",message:"hello"})
});

//app.get('/api/courses',(req,res) => {
   // res.send([1,2,3]);
//});



const port = process.env.PORT || 3000

app.listen(port ,() => console.log(`Listening on port ${port}`))


