const chalk = require('chalk');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
  register: async (req, res) => {

    const { name, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ 'local.email': email });
      if (existingUser) {
        return res
          .status(400)
          .json({msg: 'User already exists' });
      }

      const user = new User({
        name: name,
        local: {
          email: email,
          password: password
        }
      });

      const salt = await bcrypt.genSalt(8);
      user.local.password = await bcrypt.hash(password, salt);

      await user.save();

      res.status(200).send('registered')
    } catch (err) {
      console.error(chalk.red(err))
      res.status(500).send('Server error');
    }
  },

};
