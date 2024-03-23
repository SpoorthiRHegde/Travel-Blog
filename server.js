const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Feedback = require('./model/Feedback.js');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}..`);
});

// Database connection
const DB = 'mongodb+srv://Spoorthi:Spoorthi@cluster0.fhhstm5.mongodb.net/';
mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.error('Database connection error:', err);
});

// Add a feedback
app.post('/add-feedback', async (req, res) => {
    const { name, feedback } = req.body;
    try {
        const newFeedback = new Feedback({ name, feedback });
        await newFeedback.save();
        res.status(201).json({
            status: 'Success',
            data: newFeedback
        });
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err.message
        });
    }
});

// Get all feedback
app.get('/get-feedback', async (req, res) => {
    try {
        const feedbacks = await Feedback.find({});
        res.status(200).json({
            status: 'Success',
            data: feedbacks
        });
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err.message
        });
    }
});