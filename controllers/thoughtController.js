const { User, Thought } = require('../models');

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
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: thought._id } },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'thought created, but no users with this ID' });
      }

      res.json({ message: 'thought created' });
    } catch (err) {
      console.error(err);
    }
  },
  async updateThought(req, res) {
    try {
      const newThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { new: true}
      );
      if (!newThought) {
        return res
          .status(404)
          .json({ message: 'thought created, but no thought with this ID' });
      };
      res.json(newThought)
    } catch (err) {
      console.error(err);
    }

  },

  async removeThought(req, res) {
    try {
      const delThought = await Thought.findOneAndDelete(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { new: true}
      );
      if (!delThought) {
        return res
          .status(404)
          .json({ message: 'thought not deleted, but no thought with this ID' });
      };
      res.json(delThought)
    } catch (err) {
      console.error(err);
    }

  }
};
