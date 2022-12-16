const express = require('express');
const router = require('./routes/routes')
const app=express()

app.use('/api/student',router)






const PORT=process.env.PORT
app.listen(PORT||3000,()=>{
    console.log(`Server is Started on Port ${PORT}`);
})