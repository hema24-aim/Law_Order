const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const complaintRoutes = require("./routes/complaintRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/complaints",complaintRoutes);

app.listen(5000,()=>{

console.log("Server running on port 5000");

});