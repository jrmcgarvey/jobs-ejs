const express = require("express");
const router = express.Router();

const { getJobs, addJob, createJob, deleteJob } = require("../controllers/jobs")

router.get("/", getJobs);

router.get("/showJobCreate", addJob);

router.post("/", createJob);

router.post("/:id", (req, res) => {
    res.send("request to update a job listing.")
})

router.get("/edit/:id",(req,res)=>{
    res.send("request to edit a job listing")
})

router.post("/delete/:id", deleteJob)

module.exports=router