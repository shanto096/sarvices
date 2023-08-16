const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
const data = require('./data.json')
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/services', (req, res) => {
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})