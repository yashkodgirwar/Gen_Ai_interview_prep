const path = require("path")
require("dotenv").config({ path: path.join(__dirname, ".env") })
const app=require("./src/app")
const connectTODB=require("./src/config/database")
const  invokeGeminiAi= require("./src/services/ai.service")

connectTODB()
invokeGeminiAi()
app.listen(3000,()=>{   
    console.log("Server is runing on port 3000")
})

