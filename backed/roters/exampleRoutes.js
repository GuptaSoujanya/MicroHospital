const express = require('express');

const roters = express.Router();

const Collection = require('../models/exmplesModels')

roters.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
    // res.sendFile(ReactPath);
});

roters.post('/submit', async (req, res) => {
    
    try {
        const user = new Collection(req.body);
        const saveEnter = await user.save()
        res.status(200).json(saveEnter);
    } catch (error) {
        res.status(400).send(error);
    }
    console.log("User saved successfully")
})
roters.get('/submit', async (req, res) => {
   res.send("executed Success")
})

module.exports = roters;