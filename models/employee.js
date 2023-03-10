const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: String
    },
    review: [
        {
            'empname': String,
            'empemail': String
        }
    ],
    myReviews: [
        {
            'from': String,
            'message': String
        }
    ],
}, {
    timestamps: true,
});

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee;