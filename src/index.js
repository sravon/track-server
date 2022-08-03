require('./models/User');
require('./models/Project');
require('./models/Track');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middleware/requireAuth');

const app = express();

app.use(bodyparser.json())
app.use(authRoutes)
app.use(trackRoutes)


const mongoUri = 'mongodb+srv://shrabon:Assura142@cluster0.vlv4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true, useUnifiedTopology: true
})


mongoose.connection.on('connected', () => {
    console.log('connnted to instance')
})
mongoose.connection.on('error', (err) => {
    console.log('error to instance ', err)
})

app.get('/', requireAuth , (req, res) => {
    res.send(`hi there ${req.user.email}`);
})

app.listen(3000, () => {
    console.log('Listening on port 300');
})