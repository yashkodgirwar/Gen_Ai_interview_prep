const {Router}=require('express')
const authController=require("../controllers/auth.controllers")
const authRouter =Router()
const authmiddleware=require("../middlewares/auth.middleware")


/**
 * @route POST/api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register",authController.registerUserController)
/**
 * @route POST/api/auth/login
 * @description login a user with email and password
 * @access Public
 */
authRouter.post("/login",authController.loginUserController)

/**
 * @route GET/api/auth/logout
 * @description clear token from user cookie and add the token in blacklist 
 * @access Public
 */
authRouter.post("/logout",authController.logoutUserController)

/**
 * @route GET/api/auth/get-me
 * @description get the cuurent logged in user details
 * @access Public
 */
authRouter.post("/get-me",authmiddleware.authUser,authController.getMeController)

module.exports=authRouter