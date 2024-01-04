const { Schema, model } = require('mongoose');

// Schema for what makes up a thought
const userSchema = new Schema(
    {
       username: {
        type: String,
        unique: true,
        required: true,
        trim: true
       }, 

       email: {
        type: String,
        unique: true,
        required: true,
        match: []
       }
    },
    {


    }
);

// Initialize the Thought model
const User = model('User', userSchema);

module.exports = User;