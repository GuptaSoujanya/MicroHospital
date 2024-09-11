const express = require('express');

const roters = express.Router();

const User = require('../models/exmplesModels')

roters.post('/submit', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
})
roters.get('/submit', async (req, res) => {
    const users = await User.find({});
    res.send(users); //
})

module.exports = roters;