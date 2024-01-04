const { Schema, model } = require('mongoose');

// Schema to create Post model
const postSchema = new Schema(
  {
    text: String,
    username: String,
    thought: [{ type: Schema.Types.ObjectId, ref: 'thought' }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per post
postSchema.virtual('thoughtCount').get(function () {
  return this.thoughts.length;
});

// Initialize our Post model
const Post = model('post', postSchema);

module.exports = Post;
