const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const UserData = mongoose.model('UserData');

const router = express.Router();

router.use(requireAuth);

router.get('/userdata', async (req, res) => {
    const userData = await UserData.find({userId: req.user._id});
    res.send(userData);
})

router.post('/userdata', async (req, res) => {
    const {timeStamp,
            firstName,
            lastName,
            age,
            gender,
            phoneNumber,
            address,
            bloodGroup,
            diabitic,
            highBloodPressure,
            currentUnderDiagnosis} = req.body;
    console.log(req.body);
    console.log(req.user._id);

    if(!firstName || !lastName){
        return res.status(422).send({error: 'You must provide First Name and Last Name'});
    }

    try{
        const userData = new UserData({
            timeStamp,
            firstName,
            lastName,
            age,
            gender,
            phoneNumber,
            address,
            bloodGroup,
            diabitic,
            highBloodPressure,
            currentUnderDiagnosis,
            userId: req.user._id});
        await userData.save();
        res.send(userData);
    }catch(err){
        res.status(422).send({error:err.message});
    }

})

module.exports = router;