const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const courseData = require('./data/courseData.json')

app.get('/', (req, res) => {
    res.send('Welcome to Learn With Anik360 server!')
})


app.get('/courseData', (req, res) => {
    res.send(courseData)
})

app.get('/courseData/:id', (req, res) => {
    const id = req.params.id;
    const course = courseData.find(c => c.id == id);
    res.send(course);
})

// error handling
app.use((req, res, next) => {
    res.status(404).send('Sorry cant find that!');
});


app.listen(port, () => {
    console.log(`Anik360 server running on port ${port}`)
})