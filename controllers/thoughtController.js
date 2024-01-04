const { Post, Thought } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thought = await Thought.find();
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought found with that id' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a thought
  async createThought(req, res) {
    try {
      const Thought = await Thought.create(req.body);
      const post = await Post.findOneAndUpdate(
        { _id: req.body.postId },
        { $push: { thoughts: thought._id } },
        { new: true }
      );

      if (!post) {
        return res
          .status(404)
          .json({ message: 'thought created, but no posts with this ID' });
      }

      res.json({ message: 'thought created' });
    } catch (err) {
      console.error(err);
    }
  },
};
