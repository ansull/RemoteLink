const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://ansul18:ansul@cluster0.xzh8rmz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: `);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;




