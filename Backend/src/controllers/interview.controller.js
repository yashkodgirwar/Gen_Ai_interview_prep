
const pdfparse=require("pdf-parse")
const generateInterviewReport=require("../services/ai.service")
const interviewReportModel=require("../models/interviewReport.model")
async function gererateInterViewReportcontroller(req,res){

    const resumecontent=await pdfparse(req.file.buffer)
    const{selfDescription,jobDescription}=req.body
    const interviewReportByai=await generateInterviewReport({
        resume:resumecontent.text,
        selfDescription,
        jobDescription

    })
    const interviewResport=await interviewReportModel.create({
        user:req.user.id,
        resume:resumecontent.text,
        selfDescription,
        jobDescription,
        ...interviewReportByai


    })

    res.status(201).json({
        message:"Interview report generated successfully",
        interviewResport
    })
}


module.exports={gererateInterViewReportcontroller}