const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    timeStamp: Number,
    firstName: {
        type: 'String',
        default: ''
    },
    lastName: {
        type: 'String',
        default: ''
    },
    age: Number    ,
    gender: {
        type: 'String',
        default: 'Male'
    },
    phoneNumber: Number,
    address: {
        type: 'String',
        default: ''
    },
    bloodGroup: {
        type: 'String',
        default: 'B+'
    },
    diabitic: {
        type: 'String',
        default: 'No'
    },
    highBloodPressure: {
        type: 'String',
        default: 'No'
    },
    currentUnderDiagnosis:{
        type: 'String',
        default: 'No'
    }
});

mongoose.model('UserData', userDataSchema);