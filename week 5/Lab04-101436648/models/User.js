// File to define the User model schema and export it for use in the application.

const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Invalid email address"]
    },
    city: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^[a-zA-Z\s]+$/.test(value),
            message: "City name must contain only alphabets and spaces"
        }
    },
    website: {
        type: String,
        required: true,
        validate: [validator.isURL, "Invalid URL"]
    },
    zip: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^\d{5}-\d{4}$/.test(value),
            message: "Invalid ZIP code format (12345-1234)"
        }
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^\d-\d{3}-\d{3}-\d{4}$/.test(value),
            message: "Invalid phone format (1-123-123-1234)"
        }
    }
});

module.exports = mongoose.model('User', userSchema);
