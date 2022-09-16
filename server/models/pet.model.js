const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} is a required parameter."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters long."]
        },
        type: {
            type: String,
            required: [true, "{PATH} is a required parameter."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters long."]
        },
        description: {
            type: String,
            required: [true, "{PATH} is a required parameter."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters long."]
        },
        skill1: {
            type: String,
        },
        skill2: {
            type: String,
        },
        skill3: {
            type: String,
        }
    }, { timestamp: true }
);

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;