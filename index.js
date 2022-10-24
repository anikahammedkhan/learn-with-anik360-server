const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Welcome to Learn With Anik360 server!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})