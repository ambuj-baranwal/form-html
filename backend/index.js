require("dotenv").config()
const express = require("express")

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get("/:input", (req, res) => {
    res.send(`${inp} `)
  })
  
  const port = process.env.PORT
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })