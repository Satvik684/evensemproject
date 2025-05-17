const Fuse = require("fuse.js");

let dat = [
  {
    _id: "682839058d71f968f6db2d07",
    scholarship_name: "Dissertation Fieldwork Grant 2025",
    eligible_degrees: "PhD",
    funding_type: "Partial Funding",
    eligible_courses: "Anthropology",
    deadline: "01 Nov, 2025",
    location: "Any research institution around the world",
    link: "https://www.wemakescholars.com/other/wenner-gren-foundation/scholarships",
    image_url:
      "https://static.wemakescholars.com/images/scholarship-providers/1703.webp",
  },
  {
    _id: "682839058d71f968f6db2d08",
    scholarship_name:
      "DNP Foundation For Cultural Promotion Graphic Culture Research Grant 2025",
    eligible_degrees: "Masters, Research Fellow/ Scientist, Other",
    funding_type: "Partial Funding",
    eligible_courses:
      "Research on graphic design or graphic art or graphic culture-related archives",
    deadline: "16 Jun, 2025",
    location: "Universities all around the world",
    link: "https://www.wemakescholars.com/trust-foundation/dnp-foundation-for-cultural-promotion/scholarships",
    image_url:
      "https://static.wemakescholars.com/images/scholarship-providers/r7Bq34WVLBTqOjL9du8HLxokym6DrLPN.webp",
  },
  {
    _id: "682839058d71f968f6db2d09",
    scholarship_name: "JMS Trust Merit Scholarships 2025",
    eligible_degrees: "High/Secondary School, Bachelors, Masters",
    funding_type: "Partial Funding",
    eligible_courses: "Any subject",
    deadline: "31 Jul, 2025",
    location: "Schools, Colleges and Institutions in India",
    link: "https://www.wemakescholars.com/other/j.m.sethia-charitable-trust/scholarships",
    image_url:
      "https://static.wemakescholars.com/images/scholarship-providers/2210.webp",
  },
  {
    _id: "682839058d71f968f6db2d0a",
    scholarship_name: "Aditya Birla Scholarships 2025",
    eligible_degrees: "Bachelors, Masters, MBA",
    funding_type: "Partial Funding",
    eligible_courses: "Engineering, MBA, Law",
    deadline: "10 Jun, 2025",
    location: "Selected Universities in India",
    link: "https://www.wemakescholars.com/other/aditya-birla-group/scholarships",
    image_url:
      "https://static.wemakescholars.com/images/scholarship-providers/664.webp",
  },
  {
    _id: "682839058d71f968f6db2d0b",
    scholarship_name: "Minority Scholarship, Maharashtra 2025",
    eligible_degrees: "Bachelors, Masters, Medicine (MBBS/ MD)",
    funding_type: "Partial Funding",
    eligible_courses: "Selected subjects offered by the Institutions",
    deadline: "31 May, 2025",
    location: "Maharashtra",
    link: "https://www.wemakescholars.com/other/government-of-india/scholarships",
    image_url:
      "https://static.wemakescholars.com/images/scholarship-providers/255.webp",
  },
  {
    _id: "682839058d71f968f6db2d0c",
    scholarship_name:
      "Rajarshri Chhatrapati Shahu Maharaj Fee Reimbursement Scholarship Scheme 2025",
    eligible_degrees: "Bachelors, Medicine (MBBS/ MD)",
    funding_type: "Partial Funding",
    eligible_courses: "Selected subjects offered by the institutions",
    deadline: "31 May, 2025",
    location: "Educational institutions in Maharashtra",
    link: "https://www.wemakescholars.com/other/government-of-india/scholarships",
    image_url:
      "https://static.wemakescholars.com/images/scholarship-providers/255.webp",
  },
];


const fuseOptions = {
      shouldSort: true,
      keys: ["scholarship_name"], // Search in the 'eligible_degrees' field
      threshold: 0,
      includeScore: true,
    };

    const fuse = new Fuse(dat, fuseOptions);
    const results = fuse.search('SC'); // Use Fuse to search
    console.log(results);
    //filteredDegree = results.map((result) => result.item);
