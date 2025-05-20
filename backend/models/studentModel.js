const mongoose = require("mongoose");

//create data schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  course: {
    type: String,
    required: true,
  },
  gpa: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  location: {
    type: String,
    required: true,
  },
  incomeStatus: {
    type: String,
    enum: ["Low", "Middle", "High"],
    default: "Middle",
  },
  category: {
    type: String,
    enum: ["General", "OBC", "SC/ST"],
    required: true,
  },
});

const scrapedSchema = new mongoose.Schema({
  scholarship_name: {
    type: String,
    required: true,
  },
  eligible_degrees: {
    type: String,
    required: true,
  },
  funding_type: {
    type: String,
    required: true,
  },
  eligible_courses: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
});

const scrapedSchema2 = new mongoose.Schema({
  scholarship_name: {
    type: String,
    required: true,
  },
  eligibility_degree: {
    type: String,
    required: true,
  },
  funding_type: {
    type: String,
    required: true,
  },
  eligibility_course: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const student = mongoose.model("student", studentSchema);
const scraped = mongoose.model("scraped", scrapedSchema);
const scrapeduk = mongoose.model("scrapeduk", scrapedSchema);
const scrapedusa = mongoose.model("scrapedusa", scrapedSchema);
const scrapedaus = mongoose.model("scrapedaus", scrapedSchema);
module.exports = { student, scraped,scrapeduk,scrapedusa,scrapedaus };

