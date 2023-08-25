const Task = require('../../../model/todo');
//add task
module.exports.newTodo = async function(req,res){
    try{
        const todo = await Task.create(req.body);
        const sortedTasks = await Task.find().sort({ createdAt: 1 }); // Sorting by ascending createdAt

      return  res.json(200,{
            task:sortedTasks, // Sorting by ascending createdAt
            success:true,
        })
    }
    catch(error){
       return res.json(500,{
        message:error.message,
        success:fasle
       })
    } 
}

//delete
module.exports.destroyTask = async function(req,res){
    try{
      await Task.deleteOne({_id:req.params.id});
      return res.json(200,{
        message:"task has been deleted"
      })

    }
    catch(error){
    return res.json(401,{
        message:'issue in deleteing this task',
        error:error.message
    })
    }
}
//updating task
module.exports.updateTask = async function(req,res){
    try{
      let taskId = req.params.id;
      let updateTask = await Task.findOneAndUpdate({
        _id:taskId
      },{
        title:req.body.title
      },{
        new:true,
        runValidators:true
      });
      return res.status(200).json({
        data:updateTask,
        message:"task updated Successfully!"
      })
    }catch(error){
       return res.json(401,{
        message:error.message
       })
    }
}
//show all tasks
module.exports.allTask = async function(req,res){
    try{
        let todos = await Task.find();
        return res.json(200,{
            data:todos
        })
    }
    catch(error){
        return res.json(500,{
            message:"internal server error"
        })
    }
}
//mark done task
module.exports.markComplete = async function(req, res) {
  try {
    let task = await Task.findById(req.params.id); // Removed unnecessary object wrapping
    if (!task) {
      return res.json(404, {
        message: "Task not found",
        status: "not found"
      });
    }
    
    if (task.completed) {
      return res.json(200, {
        message: "Task is already completed"
      });
    }
  console.log("im here");
    task.completed = true;
    await task.save(); // Save the updated task

    return res.json(200, {
      message: "Task completed!",
      success:true
    });
  } catch (error) {
    return res.json(500, {
      message: error.message,
      status: "internal error"
    });
  }
};
