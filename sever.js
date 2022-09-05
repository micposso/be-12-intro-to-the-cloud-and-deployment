const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello, world!again')
})

app.listen(3000)
