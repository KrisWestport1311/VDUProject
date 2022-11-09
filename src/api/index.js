const express = require("express");
const cors = require('cors')
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const locationRoute = require("./routes/locations.js")

dotenv.config();


mongoose
.connect(process.env.MONGO_URL)
.then(console.log("Connected to our Mongo_Atlas_DB"))
.catch((err) => console.log(err));

//middlewares
app.use(cors())
app.use(express.json()); //so you can send json object to express server
app.use(express.urlencoded({extended:true}))

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/locations", locationRoute)

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "There is an issue"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack, //gives full breakdown of errors
    })
})




app.listen("5000", ()=>{
    console.log("Backend is running!");
});