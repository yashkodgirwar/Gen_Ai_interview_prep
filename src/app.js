const express = require ("express")
/*require all the routes here*/
const authRouter=require("./route/auth.route")



const app=express()
app.use(express.json())

/*using all the routes here*/
app.use("/api/auth",authRouter)


module.exports=app