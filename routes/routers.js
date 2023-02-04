const express = require("express");
const router = express.Router();
const students = require("../models/studentSchema.js");

// Add Student

router.post("/addstudent", async (req, res) => {
  const { firstName, middleName, lastName, subject, division, rollNumber } =
    req.body;

  try {
    const newStudent = new students({
      firstName,
      middleName,
      lastName,
      subject,
      division,
      rollNumber,
    });
    await newStudent.save();
    res.status(201).json(newStudent);
    console.log(newStudent);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get Students Data

router.get("/getdata", async (req, res) => {
  try {
    const studentdata = await students.find();
    res.status(201).json(studentdata);
    console.log(studentdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get individual Student Data
router.get("/getstudent/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const studentindividual = await students.findById({ _id: id });
    console.log(studentindividual);
    res.status(201).json(studentindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

// update student
router.patch("/updatestudent/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedstudent = await students.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updatedstudent);
    res.status(201).json(updatedstudent);
  } catch (error) {
    res.status(422).json(error);
  }
});

// delete student
router.delete("/deletestudent/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedstudent = await students.findByIdAndDelete({ _id: id });
    console.log(deletedstudent);
    res.status(201).json(deletedstudent);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
