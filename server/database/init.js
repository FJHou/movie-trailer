const mongoose = require('mongoose');
const db = 'mongodb://localhost/movie-trailer';

mongoose.Promise = global.Promise;

exports.connect = () => {
  let maxConnctTimes = 0;

  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }

    mongoose.connect(db);
  })
}
