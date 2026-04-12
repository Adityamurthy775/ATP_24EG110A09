import jwt from 'jsonwebtoken'
let {verify}=jwt
import { config } from 'dotenv'
export function verfiytoken(req,res,next){
    //token verfication logic
    //to access cookies property of request object we need cookie parcel middleware.otherwise it is undefined
    let token=req.cookies.token
    //if token is undefined
    if(!token){
        return res.status(401).json({message:"please login"})
    }
    //if token is existed
    try{
    let decodedtoken=verify(token,"adcd")
    //console.log(decodedtoken)
    //attach  decoded obj to api
    req.user=decodedtoken
    next()
    }catch(err){
        res.status(401).json({message:"sesion expried login"})
    }



}