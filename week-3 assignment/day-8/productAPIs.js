import exp from 'express'
export let productapp=exp.Router()
import { productmodel } from '../models/productModel.js'
import { verfiytoken } from '../middlewares/verfiytoken.js'
import jwt from 'jsonwebtoken'
let {sign}=jwt
productapp.post("/auths", async (req, res) => {
    let { productid } = req.body
 let product = await productmodel.findById(productid)

    if (!product) {
        return res.status(400).json({ message: "Invalid id" })
    }
    let signtoken = sign(
        { id: product._id },"adcd",{ expiresIn: "1h" })
    res.cookie("token", signtoken, {
        httpOnly: true,
        sameSite: "lax",
        secure: false
    })
    res.status(200).json({message: "login success",payload: product})
})
productapp.post("/products",async(req,res)=>{
    let productdata=req.body
    let newproductdoc=new productmodel(productdata)
    let result= await newproductdoc.save()
    res.status(201).json({message:"user is created"})
})
productapp.get("/products",verfiytoken,async(req,res)=>{
    let productlist=await productmodel.find()
    res.status(201).json({message:"products list",payload:productlist})
})
productapp.get("/products/:id",async(req,res)=>{
    let id=req.params.id
    let productdata=await productmodel.findById(id)
    if(productdata===null){
       return  res.status(404).json({message:"product data is not found"})
    }
    res.status(200).json({message:"products data",payload:productdata})

})
productapp.put("/products/:id",async(req,res)=>{
    let id=req.params.id
    let modifieddata=req.body
    let updateddata=await productmodel.findByIdAndUpdate(id,{$set:{...modifieddata}},{new:true,runValidators:true})
    res.status(200).json({message:"product data is updated",payload:updateddata})
})
productapp.delete("/products/:id",async(req,res)=>{
    let id=req.params.id
    let deletedproduct=await productmodel.findByIdAndDelete(id)
    if(deletedproduct===null){
      return   res.status(404).json({message:"product data is not found"})
    }
    res.status(201).json({message:"product is deleted"})
})
