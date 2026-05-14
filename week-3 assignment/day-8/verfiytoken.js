// Import JWT library for token verification
import jwt from 'jsonwebtoken'

// Destructure verify function from JWT
let {verify}=jwt

// Import config function from dotenv
import { config } from 'dotenv'

// Middleware function to verify JWT token from cookies
export function verfiytoken(req,res,next){
    // Extract token from cookies
    // Note: Cookie parser middleware must be used to access req.cookies property
    let token=req.cookies.token

    // If token is not present in cookies
    if(!token){
        return res.status(401).json({message:"please login"})
    }

    // If token exists, verify it
    try{
        // Verify token using secret key
        let decodedtoken=verify(token,"adcd")

        // Attach decoded token object to request for use in subsequent routes
        req.user=decodedtoken

        // Call next middleware/route handler
        next()
    }catch(err){
        // If token verification fails (expired or invalid)
        res.status(401).json({message:"sesion expried login"})
    }
}
