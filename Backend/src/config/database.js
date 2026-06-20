const { default: mongoose } = require("mongoose")
const mongose =require("mongoose")

async function connectToDB(){
   try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to Database")
    
   } catch (error) {
       console.log(err)
   } 
}

module.exports=connectToDB