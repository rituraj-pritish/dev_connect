const mongoose = require('mongoose');
const chalk = require('chalk');
const keys = require('./keys');

module.exports = async () => {
  try {
    await mongoose.connect(keys.mongoUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log(chalk.green('db connected'));
  } catch (err) {
    console.error(chalk.red(err));
    process.exit(1);
  }
};
