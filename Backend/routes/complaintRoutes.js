const express = require("express");
const router = express.Router();

const Complaint = require("../models/Complaint");


// Add Complaint
router.post("/add", async (req,res)=>{

  const {title,description} = req.body;

  const complaintId = "LAW" + Date.now();

  const newComplaint = new Complaint({

    complaintId,
    title,
    description

  });

  await newComplaint.save();

  res.json({
    message:"Complaint Submitted",
    complaintId
  });

});


// Get All Complaints
router.get("/", async (req,res)=>{

  const complaints = await Complaint.find();

  res.json(complaints);

});

module.exports = router;