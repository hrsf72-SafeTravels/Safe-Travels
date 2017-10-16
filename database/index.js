const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind('console', 'error connecting mongoose'));
db.once('open', () => {
  console.log('success connecting mongoose');
});

module.exports = db;
