// Import Express framework for creating API server
import exp from 'express'

// Import MongoDB connection function
import { connect } from 'mongoose'

// Import product routes/APIs
import { productapp } from './APIs/productAPIs.js'

// Create Express application instance
let app=exp()

// Middleware to parse incoming JSON requests
app.use(exp.json())

// Define server port
let port =4000

// Use product APIs under /product-api route
app.use("/product-api",productapp)

// Async function to establish database connection and start server
async function database() {
    try{
        // Connect to MongoDB running on localhost
        await connect("mongodb://localhost:27017/mydb")
        console.log("connection is sucessful")

        // Start Express server on defined port
        app.listen(port,()=> console.log("server is active..."))
    }catch(err){
        // Log any connection errors
        console.log(err)
    }
}

// Call database function to connect and start server
database()

// Error handling middleware for API errors
app.use((err,req,res,next)=>{
    // Handle Mongoose validation errors
    if(err.name==='ValidationError'){
        return res.status(400).json({message:"errror occured",error:err.message})
    }

    // Handle Mongoose cast errors (invalid ID format)
    if(err.name==='CastError'){
        return res.status(400).json({message:"errror occured",error:err.message})
    }

    // Handle generic server errors
    res.status(500).json({message:"error occured",error:err.message})
})
