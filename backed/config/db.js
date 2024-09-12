const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://soujanyagupta:ZK0YtrTlSU0no2iR@microhospital.sm2ox.mongodb.net/?retryWrites=true&w=majority&appName=MicroHospital';

const connectDB = async () =>{
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Error connecting to MongoDB', err.message);
        process.exit(1);
    }
}

module.exports = connectDB;