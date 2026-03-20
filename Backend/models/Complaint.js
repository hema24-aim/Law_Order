const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({

  complaintId:{
    type:String,
    unique:true
  },

  title:{
    type:String
  },

  description:{
    type:String
  },

  status:{
    type:String,
    default:"Pending"
  },

  createdAt:{
    type:Date,
    default:Date.now
  }

});

module.exports = mongoose.model("Complaint",complaintSchema);