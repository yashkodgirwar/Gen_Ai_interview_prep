const mongoose = require("mongoose")

async function connectToDB(){
   try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to Database")
    
   } catch (error) {
       console.error("Database connection error:", error)
   } 
}

module.exports=connectToDB