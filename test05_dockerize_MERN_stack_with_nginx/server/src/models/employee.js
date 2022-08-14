const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;