const express = require('express');
const mongoose = require('mongoose');

const User = mongoose.model('Project');

const router = express.Router();

router.post('/project', async (req, res) => {
    const { name, des } = req.body;
    const user = new User({ name, des })
    await user.save();
    res.send('you made a post request');
})

module.exports = router;