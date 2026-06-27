const express=require("express")
const interviewerRouter=express.Router()
const authMiddleware=require("../middlewares/auth.middleware")
const interviewcontroller=require("../controllers/interview.controller")
const upload=require("../middlewares/file.middleware")
/**
 * @route POST/api/interview/
 * @description generate new interview report on the basis of user self description resume pdf and job description
 * @access private
 */
interviewerRouter.post("/",authMiddleware.authUser,upload.single("resume"),interviewcontroller.gererateInterViewReportcontroller)
module.exports=interviewerRouter