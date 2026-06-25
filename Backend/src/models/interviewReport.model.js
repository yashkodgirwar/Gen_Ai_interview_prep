const mongoose =require("mongoose")

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

const interviewReportSchema = new mongoose. Schema ( {
jobDescription: {
type: String,
required: [ true, "Job description is required" ]
},
resume: {
type: String,

selfDescription: {
type: String,
},

matchScore: {
type: Number,
},
matchScore:{
  min: 0,
max: 100,
}

}

})