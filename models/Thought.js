const { Schema, model } = require('mongoose');

// Schema for what makes up a thought
const thoughtSchema = new Schema({
  text: String,
  username: String,
});

// Initialize the Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
