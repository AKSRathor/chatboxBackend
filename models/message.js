const mongoose = require('mongoose');
const { Schema } = mongoose

const messageSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId, //same as foreign key
        ref: 'user'
    },
    from:{
        type:String,
        require:true
    },
    to:{
        type:String,
        default:true
    },
    chatid:{
        type:Array,
        require: true
    },
    message:{
        type:String,
        default:true
    },
    date:{
        type:Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model("messages", messageSchema)