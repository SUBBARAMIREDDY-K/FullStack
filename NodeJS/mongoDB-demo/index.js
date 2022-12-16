const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/playground')
    .then(()=> console.log("Connected to mongoDB...."))
    .catch(err => console.log("Could not Connect to MongoDB"))


    //scheme is only specific to the mongoose not for Mongodb
    

    const courseSchema = new mongoose.Schema({
        name : String,
        author :String,
        tags:[String],
        date:{ type : Date,default:Date.now },
        isPublished:Boolean
    });

    //classes,objects
    //course,nodeCourse

    const Course = mongoose.model('course' , courseSchema);

    async function createFunction(){
        const course = new Course({
            name:'NODEJS Course',
            author:'Ram',
            tags:['angular','frontEnd'],
            isPublished:true
        });
    
        const result = await course.save();
    
        console.log(result)
    }
    //createFunction();

    //Retreving Data from the Databases
    async function getCourse(){

       const courses = await Course
       .find({author:"Ram",isPublished:true})
       .limit(10)
       .sort({name: 1})
       .select({name:1,tags:1});
       console.log(courses)
    }
    getCourse()