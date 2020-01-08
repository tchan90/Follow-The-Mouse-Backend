const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
const apiPort = 5000
require('dotenv').config();
const passport = require('passport');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
    );
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
mongoose.set('useFindAndModify', false);

app.get('/', (req, res) => {
    res.send('Hello World!')
})
require('./routes')(app)

//Passport middleware
app.use(passport.initialize());
//Passport config
require('./config/passport')(passport);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))