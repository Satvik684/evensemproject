const {
  scraped,
  scrapedusa,
  scrapeduk,
  scrapedaus,
} = require("../models/studentModel");

const getAll = async (req, res) => {
  try {
    const arr1 = await scraped.find();
    const arr2 = await scrapeduk.find();
    const arr3 = await scrapedusa.find();
    const arr4 = await scrapedaus.find();
    const result = arr1.concat(arr2, arr3, arr4);

    res.json(result);
  } catch (error) {
    res.json({
      error: "Failed to filter scholarships",
      details: error.message,
    });
  }
};

module.exports = getAll;
