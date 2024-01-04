const { Schema, model } = require('mongoose');

// Schema for what makes up a thought
const thoughtSchema = new Schema({

});

// Initialize the Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
