const Task = require('../../../model/todo');
//add task
module.exports.newTodo = async function(req,res){
    try{
        const todo = await Task.create(req.body);
      return  res.json(200,{
            task:todo,
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