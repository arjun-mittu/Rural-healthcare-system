const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    firstName: {
        type: 'String',
        default: ''
    },
    lastName: {
        type: 'String',
        default: ''
    },
    age: Number,
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
    sugar: {
        type: 'String',
        default: 'No'
    },
    currentUnderDiagnosis:{
        type: 'String',
        default: 'No'
    },
    clinicAddress: {
        type: 'String',
        default: 'Earth'
    },
    specialisation: {
        type: 'String',
        default: 'Bugging ppl'
    },
    fees: {
        type: 'String',
        default: '0'
    },
    userType: {
        type: 'String',
        default: 'Patient'
    }
});

mongoose.model('UserData', userDataSchema);