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

app.use((req, res, next) => {
    next(new NotFoundError('Not found'));
});

// Generic error handling middleware
app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong in the application';

    res.status(status).json({ error: { status, message } });
});

module.exports = app;