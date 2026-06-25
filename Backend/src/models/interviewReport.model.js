const mongoose = require("mongoose")

/**
 * -job description --Stirng
 * -rersume text --String
 * -self description --String
 *  
 * -MatchScore:Number
 * 
 * -Technical Question:[
 *   {
 *     question:"",
 *     intention :"",
 *     answer : ""
 * 
 * }]
 * -Behavioral question :[
 * {
 *     question:"",
 *     intention :"",
 *     answer : ""
 * 
 * } ]
 * 
 * 
 * - skill gaps :[{
 *   skill: "",
 *   Severity :{
 *    enum: ["low", "medium" ,"high"]
 * 
 * }
 * 
 * }]
 *  - preparation plan :[{
 *       day:Number,
 *        focus:String,
 *       tasks:[String]
 * }]
 */

const techinacalQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Techincal question is required"]
    },
    intention: {
        type: String,
        required: [true, "Intention is required"]
    },
    answer: {
        type: String,

        required: [true, "Answer is required"]
    }

}, {
    _id: false
})


const bheavioralQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Behavioral question is required"]
    },
    intention: {
        type: String,
        required: [true, "Intention is required"]
    },
    answer: {
        type: String,

        required: [true, "Answer is required"]
    }

}, {
    _id: false
})

const skillGapScheme = new mongoose.Schema({
    skill: {
        type: String,
        required: [true, "Skill is required"]
    },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],
        required: [true, "Severity is required "]
    }
}, {
    _id: false
})

const preparationPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: [true, "Day is required"]
    },
    focus: {
        type: String,
        required: [true, "Task is required"]
    },
    tasks: [
        {
            type: String,
            required: [true, "Task is required"]
        }
    ]
})






const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [true, "Job description is required"]
    },
    resume: {
        type: String,

        selfDescription: {
            type: String,
        },

        
        matchScore: {
             type: Number,
            min: 0,
            max: 100,
        }

    },

    technicalQuestions: [techinacalQuestionSchema],
    bheavioralQuestion: [bheavioralQuestionSchema],
    SkillGaps: [skillGapScheme],
    preparationPlan: [preparationPlanSchema]


}, {
    // Schema options
  // timestamps:true automatically adds createdAt and updatedAt fields
    timestamps: true
})