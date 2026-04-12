import exp from 'express'
import { connect } from 'mongoose'
import { productapp } from './APIs/productAPIs.js'
import cookieParser from 'cookie-parser'
let app=exp()
app.use(exp.json())
app.use(cookieParser())
let port =4000
app.use("/product-api",productapp)
async function database() {
    try{
        await connect("mongodb://localhost:27017/mydb")
        console.log("connection is sucessful")
        app.listen(port,()=> console.log("server is active..."))
    }catch(err){
        console.log(err)
    }
}
database()

app.use((err,req,res,next)=>{
    if(err.name==='ValidationError'){
        return res.status(400).json({message:"errror occured",error:err.message})
    }
    if(err.name==='CastError'){
        return res.status(400).json({message:"errror occured",error:err.message})
    }

    //server side error
    res.status(500).json({message:"error occured",error:err.message})
})
