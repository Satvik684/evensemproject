const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
let cors = require("cors");
dotenv.config();
app.use(express.json());
app.use(cors());

const studentRoute = require("./routes/studentRoutes"); 

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("database connected!");
    app.listen(process.env.PORT || 8000,(err)=>{
        if(err)console.log("ERROR");
        console.log(`server is running at ${process.env.PORT}` );
    });
}).catch((error)=>{
    console.log(error);
})

app.use("/api/user",studentRoute);








//http://localhost:4000/api/user