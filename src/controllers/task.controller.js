import Task from "../models/Task"

export const finAllTask = async (req,res)=>{
    const tasks= await Task.find();

    res.send(tasks)
}

export const createTask = async (req,res)=>{
    console.log(req.body)
    const newTask= new Task({title:req.body.title,description:req.body.description})
    const taskSaved= await newTask.save();
    res.json(taskSaved)
}