const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');
const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    completed:{
        type:boolean,

    }
},{
    timestamps:true
})
const Task = mongoose.model('Task',todoSchema);
module.exports = Task;