const User = require('../models/User');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const newUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { new: true}
      );
      if (!newUser) {
        return res
          .status(404)
          .json({ message: 'no user with this ID' });
      };
      res.json(newUser)
    } catch (err) {
      console.error(err);
    }

  },

  async removeUser(req, res) {
    try {
      const delUser = await User.findOneAndDelete(
        { _id: req.params.userId },
        { $set: req.body },
        { new: true}
      );
      if (!delUser) {
        return res
          .status(404)
          .json({ message: 'no user with this ID' });
      };
      res.json(delUser)
    } catch (err) {
      console.error(err);
    }

  }
};
