const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String, // corrected spelling
    city: String,
    isManager: Boolean
});

const employee = mongoose.model('employee', employeeSchema);
module.exports = employee;