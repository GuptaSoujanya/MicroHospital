const mongos = require('mongoose');

const UserSchema = new mongos.Schema({
    inputPatientName: {
        type: String,
        required: true
    },
    inputDoctorName : { 
        type: String,
        required: true,
    },
    inputDepartmentName: {
        type: String,
        required: true
    },
    inputPhone: {
        type: Number,
        required: true
    },
    inputSymptoms: {
      type: String,
      required: true
    },
    inputDate:{
        type: Date,
        required: true,
        default: new Date
    },
    
});

module.exports = mongos.model('User', UserSchema);