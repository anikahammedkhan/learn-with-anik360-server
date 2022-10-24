const express = require('express')
const app = express()
const port = 5000

const data = require('./data/courseData.json')

app.get('/', (req, res) => {
    res.send('Welcome to Learn With Anik360 server!')
})


app.get('/courseData', (req, res) => {
    res.send(data)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})