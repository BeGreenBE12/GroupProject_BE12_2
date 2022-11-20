//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/Project-2-BE12';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;