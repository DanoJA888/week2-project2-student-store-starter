// YOUR CODE HERE
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
const router = require('./routes/store')
app.use(morgan("tiny"));
app.use(express.json());

app.use(
    cors()
)

app.get("/", async (req, res) =>{
    res.json({ping1:'pong'})
})

app.use('/store', router);

module.exports = app;