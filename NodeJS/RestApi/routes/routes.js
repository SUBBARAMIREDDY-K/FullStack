const express = require('express');
const Joi = require('joi');

const router=express.Router()


router.use(express.json())

const students=[
    {id:1,name:"Ram"},
    {id:2,name:"bhadra"},
    {id:3,name:"Sravan"},
]

router.get('/',(req,res)=>{
    res.send(students);
})

router.get('/:id',(req,res)=>{
    const student = students.find(s=> s.id === parseInt(req.params.id))
    if(!student) return res.status(404).send("The Student with the Given Id is Not Found");

    res.send(student)
})


router.post('/',(req,res)=>{
    const { error } = validateStudent(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    const student ={
        id:students.length+1,
        name:res.body.name
    };
    students.push(student);
    res.send(student);
})


router.put('/:id',(req,res)=>{
    const student = students.find(s=> s.id === parseInt(req.params.id))
    if(!student) return res.status(404).send("The Student with the Given Id is Not Found");


    student.name=req.body.name
    res.send(student);


})

router.delete('/:id',(req,res)=>{
    const student = students.find(s=> s.id === parseInt(req.params.id))
    if(!student) return res.status(404).send("The Student with the Given Id is Not Found");
    
    const index =  student.indexOf(req.params.id)
    students.splice(index,1);
    res.send(student)
})

function validateStudent(student)
{
    const schema = Joi.object({
        name:Joi.string().min(3).required()
    });
    return Joi.validate(student,schema)
}