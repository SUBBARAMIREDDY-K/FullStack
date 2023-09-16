const express=require('express')


const routes=require('./routes/api')


const app = express()


// app.use('/api',routes);

app.get('/posts',(req,res)=>{
    res.send({name: "Hello"})
})

app.listen(process.env.port || 4000,()=>{
    console.log("Successfully Server is started on 4000")
})