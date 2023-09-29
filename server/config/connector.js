const mongoose = require("mongoose");

module.exports = async () => {
    try {
        
      await mongoose.connect(process.env.DB_CONNECTION);
      console.log('Database connected successfully');
    } catch (err) {
      console.error('Database connection error:', err);
    }
  }


