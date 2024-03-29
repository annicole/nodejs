import Task from "../models/Task";

export const finAllTask = async (req, res) => {
 try {
  const tasks = await Task.find();

  res.send(tasks);
 } catch (error) {
    res.status(500).json({
      message:"something goes wrong"
    })
 }
};

export const createTask = async (req, res) => {
  
  if(!req.bod.title){
    return res.status(400).send({message:"Content not empty"})
  }
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
    done: req.body.done ? req.body.done : false,
  });
  const taskSaved = await newTask.save();
  res.json(taskSaved);
};

export const findOneTask = async (req, res) => {
  console.log(req.params.id);
  const task = await Task.findById(req.params.id);
  res.json(task);
};

export const findAlldoneTask = async (req, res) => {
  const tasks = await Task.find({ done: true });

  res.send(tasks);
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({
    message: "Task were deleted",
  });
};

export const updateTask = async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Task was updated" });
};
