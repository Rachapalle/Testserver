const express = require('express')
const app = express()
const port = 3000
const {respondToUserInput} = require('./chatboat')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chatbot', (req, res) => {
    res.send(respondToUserInput(req.query.text))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})