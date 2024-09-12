const mongos = require('mongoose');

const Collection = new mongos.Schema({
    inputPatientName: {
        type: String,
        required: true
    },
    inputDoctorName: { 
        type: String,
        
    },
    inputDepartmentName: {
        type: String,
       
    },
    inputPhone: {
        type: Number,
        required: true
    },
    inputSymptoms: {
      type: String,
    },
    inputDate:{
        type: Date,
        default: new Date
    },
    
});

module.exports = mongos.model('dataCollection', Collection);