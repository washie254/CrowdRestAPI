const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkerSchema = new Schema({
    name: String,
    password: String,
    address: String,
    phonenumber: Number
});

module.exports = mongoose.model('worker', WorkerSchema);



