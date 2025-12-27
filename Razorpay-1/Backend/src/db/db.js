const mongoose = require("mongoose");


async function ConnectToDB() {
  try{
      await mongoose.connect()
  }catch(error){
      console.error("Error while connecting to the database" , error);
      process.exit(1); // use to shutdown server automatically
  }
}



module.exports = ConnectToDB;