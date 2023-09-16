const express = require('express');
const  router = express.Router();


app=express();

const courses =[
    {id:1, name: 'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
]




app.get('/',(req,res) => {
    res.send(courses);
});

app.get('/api/posts/:year/:month',(req,res) => {
   res.send(req.query);
});

app.get('/:id"',(req,res)=>{
   const course = courses.find(c=>c.id===parseInt(req.params.id));
   if(!course) return res.status(404).send('The course with the given ID was not found');
   res.send(course);
})
//PORT is an environment variable


app.post('/api/courses',(req,res)=>{
   
   const {error}=validateCourse(req.body);
   if(error) return   re.status(400).send(result.error.details[0].message);

   const course = {
       id: courses.length + 1,
       name: req.body.name
   };
   courses.push(course);

   res.send(course);

});

app.put('/api/courses/:id',(req,res)=>{
   const course = courses.find(c=>c.id===parseInt(req.params.id));
   if(!course) return res.status(404).send('The course with the given ID was not found');
   

   const {error}=validateCourse(req.body);
   if(error){
     return  re.status(400).send(result.error.details[0].message);
   }

   course.name = req.body.name;
   res.send(course);

});
function validateCourse(course){
   const schema = {
       name: Joi.string().min(3).required()
   };
   return Joi.validate(course,schema);
}



app.delete('/:id',(req,res)=>{
   //Look up the course
   //Not existing, return 404
   const course = courses.find(c=>c.id===parseInt(req.params.id));
   if(!course) return res.status(404).send('The course with the given ID was not found');
   
   //Delete
 const index =   courses.indexOf(course);
 courses.splice(index,1);
 res.send(course);

   //Return the same course

});


module.exports = router;