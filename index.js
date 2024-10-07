const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo.js')


const app = express()
app.use(cors())
app.use(express.json())

// connecting to database
mongoose.connect("mongodb+srv://dpansumisra:deepanshu@cluster0.olcse.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("database connect hain")).catch((error)=>console.log(error.message))

app.get('/get', (req, res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=> res.json(err))
})

app.delete('/delete/:id',(req, res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then( result=> res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id:id}, {done: true})
    .then(result=> res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) =>{
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.listen(3001, ()=>{
    console.log("Server is Running")
})