// Import Express framework
import exp from 'express'

// Import MongoDB connection function
import { connect } from 'mongoose'

// Import product routes/APIs
import { productapp } from './APIs/productAPIs.js'

// Import cookie parser middleware
import cookieParser from 'cookie-parser'

// Create Express app instance
let app=exp()

// Middleware to parse JSON requests
app.use(exp.json())

// Middleware to parse cookies
app.use(cookieParser())

// Define server port
let port =4000

// Use product APIs under /product-api route
app.use("/product-api",productapp)

// Async function to connect to database and start server
async function database() {
    try{
        // Connect to MongoDB
        await connect("mongodb://localhost:27017/mydb")
        console.log("connection is sucessful")

        // Start server listening on defined port
        app.listen(port,()=> console.log("server is active..."))
    }catch(err){
        // Log connection errors
        console.log(err)
    }
}

// Execute database connection and server start
database()

// Error handling middleware for API errors
app.use((err,req,res,next)=>{
    // Handle Mongoose validation errors
    if(err.name==='ValidationError'){
        return res.status(400).json({message:"errror occured",error:err.message})
    }

    // Handle Mongoose cast errors
    if(err.name==='CastError'){
        return res.status(400).json({message:"errror occured",error:err.message})
    }

    // Handle generic server side errors
    res.status(500).json({message:"error occured",error:err.message})
})
