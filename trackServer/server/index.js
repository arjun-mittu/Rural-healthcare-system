require('./models/user')
require('./models/userData')
const express = require('express');
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const bodyParser = require('body-parser');
const userDataRoute = require('./routes/userDataRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();
app.use(bodyParser.json())
app.use(authRoutes);
app.use(userDataRoute);
const mongoUri = 'mongodb+srv://admin:Tanmay3610@cluster0.qymuw.gcp.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.connection.on('connected', () => {
    console.log('Connected to Mongo Instance')
})

mongoose.connection.on('error', (err) => {
    console.log('Connection Error', err);
})

app.get('/', requireAuth, (req, res) => {
    res.send(`Your Email: ${req.user.email}`)
});

app.listen(3000, () => {
    console.log('Listening on Port 3000')
});