const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connetDB = require('./config/db');
// const exmpleMiddleware = require('../middleware/exmpleMiddleware');

connetDB();  

dotenv.config();

const app = express();

const exampleRoutes = require('./roters/exampleRoutes')

app.use('api/submit', exampleRoutes)

app.use(express.json());

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
    // res.sendFile(ReactPath);
});
 const PORT =process.env.PORT || 8000
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});
    