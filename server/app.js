const express = require('express'); // Express framework for building web applications
const mongoose = require('mongoose'); // Mongoose for MongoDB object modeling
const cors = require('cors'); // CORS middleware to allow cross-origin requests
const nrouter = require('./routes/new');
const url = 'mongodb://127.0.0.1:27017/startdb'
//const url = 'mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/startdb?replicaSet=m101';
const app = express();
mongoose.connect(url)
const con=mongoose.connection;
con.on('open', () => {
    console.log('connected...');
});
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests
app.use('/new',nrouter);
app.listen(1515, () => {
    console.log('Server started');
});