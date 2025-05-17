const express = require("express");
const Fuse = require("fuse.js");
const { student, scraped } = require("../models/studentModel");

const router = express.Router();

router.post("/", async (req, res) => {
  const {  course ,category} = req.body;
  let filteredDate = [];
  //filtering by date
  try {
    const currDate = new Date();
    const scholarshipData = await scraped.find();
    filteredDate = scholarshipData.filter((scholarship) => {
      const deadline = parseDate(scholarship.deadline);
      return deadline >= currDate;
    }); 

    //now filter the filteredDate array by egligilbe degrees
    let filteredDegree = [];
    const fuseOptions = {
      shouldSort: true,
      keys: ["eligible_degrees"], // Search in the 'eligible_degrees' field
      threshold: 0.5,
      includeScore: true,
    };

    const fuse = new Fuse(filteredDate, fuseOptions);
    const results = fuse.search(course); // Use Fuse to search
    results.forEach((obj)=>{
      filteredDegree.push(obj.item);
    })

    res.json(filteredDegree);


  } catch (error) {
    console.log("error in filtering!");
    res
      .status(500)
      .json({ error: "Failed to filter scholarships", details: error.message });
  }
});

module.exports = router;

function parseDate(dateString) {
  const months = {
    "Jan,": 0,
    "Feb,": 1,
    "Mar,": 2,
    "Apr,": 3,
    "May,": 4,
    "Jun,": 5,
    "Jul,": 6,
    "Aug,": 7,
    "Sep,": 8,
    "Oct,": 9,
    "Nov,": 10,
    "Dec,": 11,
  };

  const parts = dateString.split(" "); // Split by space only

  if (parts.length !== 3) {
    console.error("Invalid date format: parts.length !== 3", dateString);
    return new Date("invalid");
  }

  const day = parseInt(parts[0], 10);
  const month = months[parts[1]];
  const year = parseInt(parts[2], 10);

  if (isNaN(day) || month === undefined || isNaN(year)) {
    console.error("Invalid date component:", dateString, { day, month, year });
    return new Date("invalid");
  }

  return new Date(year, month, day);
}
