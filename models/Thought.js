const { Schema, model } = require('mongoose');

const reactionSchema = new mongoose.Schema()

// Schema for what makes up a thought
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },

    createdAt: {
      type: Date,
      default: Date.now,
      //Use a getter method to format the timestamp on query
    },

    username: {
      type: String,
      required: true
    },

    reactions: [reactionSchema],

  },
  {

    toJSON: {
      getters: true,
    },
    id: false,
  });

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});


// Initialize the Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
