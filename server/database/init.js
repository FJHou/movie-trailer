const mongoose = require('mongoose');
const db = 'mongodb://localhost/movie-trailer';

mongoose.Promise = global.Promise;

exports.connect = () => {
  let maxConnctTimes = 0;

  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }

    mongoose.connect(db, {
      useMongoClient: true,
    });

    mongoose.connection.on('disconnected', () => {
      maxConnctTimes++;
      
      if (maxConnctTimes < 5) {
        mongoose.connect(db);
      } else {
        throw new Error('数据库挂了');
      }
    });
    
    mongoose.connection.on('error', err => {
      maxConnctTimes++;

      if (maxConnctTimes < 5) {
        mongoose.connect(db);
      } else {
        throw new Error('数据库挂了');
      }
    });

    mongoose.connection.once('open', () => {
      resolve();
      console.log('MongoDB Connected Successfully');
    });
  })
}
