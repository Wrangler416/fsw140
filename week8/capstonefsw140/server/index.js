const express = require("express")
const mysql = require("mysql")
require("dotenv").config()
const cors = require("cors")

const app = express()
app.use(express.json())

app.use(cors())

const db = mysql.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB
  })

app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port 3000')
})

app.get("/reviews", (req, res) => {
    db.query("SELECT * FROM reviews", (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    })
  })

app.post("/reviews", (req, res) => {
    const insertQuery = "INSERT INTO reviews SET ?";
    db.query(insertQuery, req.body, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send("Review Added to Database")
      }
    })
  })

