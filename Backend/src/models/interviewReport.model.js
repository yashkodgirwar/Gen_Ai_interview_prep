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