const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const morgan = require("morgan")
const expressJwt = require("express-jwt")

app.use("/", express.json())
app.use(morgan("dev"))

mongoose.connect(
    "mongodb://localhost:27017/user-authentication", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("connected to database")
)

app.use("/auth", require("./routes/authRouter"))
app.use("/api", expressJwt({secret: process.env.SECRET, algorithms: ["HS256"]}))
app.use("/api/comments", require("./routes/commentRouter"))
app.use("/api/issues", require("./routes/issueRouter"))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({erdMsg: err.message})
})

app.listen(8000, () => {
    console.log("The server is running on port 8000")
})


