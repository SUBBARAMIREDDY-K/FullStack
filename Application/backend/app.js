const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');

// body-parser is a middleware is used for body parsing of the http body request
app.use(bodyParser.json())

//cors is a cross origin resource sharing  is used to provide communication between the front End and BackEnd

app.use(cors({
    origin: ' http://localhost:3000'
})); 


app.get('/gets',(req,res)=>{
    console.log("Api is called")
    res.send('hello')
})

app.post('/posts',(req,res)=>{
    // res.send({type:'Post'})
    res.send("posts Is Success")
    console.log(req.body)
})

// to set port Number in cmd use set PORT=number before staring the application
app.listen(process.env.PORT || 4000,()=>{
    console.log(`Server is Started on ${process.env.PORT}`);
})