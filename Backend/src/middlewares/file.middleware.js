const multer=require("multer")

const upload=multer({
    storage:multer.memoryStorage(),
    limits:{
        fileSize:30*1024*1024 //30 mb
    }
})

module.exports=upload