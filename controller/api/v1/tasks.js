const Task = require('../../../model/todo');
//add task
module.export.newTodo = async function(req,res){
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
module.export.destroyTask = async function(req,res){
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
module.export.updateTask = async function(req,res){
    try{
        await Task.findOneAndUpdate({_id:req.params.id});
        return res.json(200,{
            message:'task has been updated'
        })
    }catch(error){
       return res.json(401,{
        message:error.message
       })
    }
}
//show all tasks
module.export.allTask = async function(req,res){
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