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
            match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'doesnt match email']
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],

        friends: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'User',
                  }
        ],
    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false,

    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Initialize the Thought model
const User = model('User', userSchema);

module.exports = User;