const mongoose = require('mongoose');

let isConnected = false;

const dbConnection = async () => {
  mongoose.set('strictQuery', true);

  //Checking if database is connected
  if (isConnected) {
    console.log('MongoDB is already connected!');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'contactmgr',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('MongoDB is now Connected!');
  } catch (err) {
    console.log('Database connection error: ', err);
  }
};

module.exports = dbConnection;
