const mongoose = require('mongoose');


async function connectDB() {
  await mongoose.connect("mongodb+srv://yt:hSB0j4kpT84kjFQQ@yt-complete-backend.eyd9riq.mongodb.net/halley"); 

  console.log("connected to DB");
}

module.exports = connectDB;