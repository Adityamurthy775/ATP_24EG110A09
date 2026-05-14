// Import Express router
import exp from 'express'

// Create router instance for product endpoints
export let productapp=exp.Router()

// Import product model
import { productmodel } from '../models/productModel.js'

// Import token verification middleware
import { verfiytoken } from '../middlewares/verfiytoken.js'

// Import JWT library for token operations
import jwt from 'jsonwebtoken'

// Destructure sign function from JWT
let {sign}=jwt

// POST endpoint for authentication - generates JWT token and sets cookie
productapp.post("/auths", async (req, res) => {
    // Extract productid from request body
    let { productid } = req.body

    // Find product by ID in database
    let product = await productmodel.findById(productid)

    // If product not found
    if (!product) {
        return res.status(400).json({ message: "Invalid id" })
    }

    // Create JWT token with product ID, secret key, and expiration time (1 hour)
    let signtoken = sign(
        { id: product._id },"adcd",{ expiresIn: "1h" })

    // Set secure cookie with token
    res.cookie("token", signtoken, {
        httpOnly: true,      // Only accessible via HTTP, not JavaScript
        sameSite: "lax",     // CSRF protection
        secure: false        // HTTP only (change to true for HTTPS)
    })

    // Return login success with product data
    res.status(200).json({message: "login success",payload: product})
})

// POST endpoint to create a new product
productapp.post("/products",async(req,res)=>{
    // Get product data from request body
    let productdata=req.body

    // Create new product document instance
    let newproductdoc=new productmodel(productdata)

    // Save product to database
    let result= await newproductdoc.save()

    // Return success response
    res.status(201).json({message:"user is created"})
})

// GET endpoint to retrieve all products - requires token verification
productapp.get("/products",verfiytoken,async(req,res)=>{
    // Fetch all products from database
    let productlist=await productmodel.find()

    // Return list of products
    res.status(201).json({message:"products list",payload:productlist})
})

// GET endpoint to retrieve a single product by ID
productapp.get("/products/:id",async(req,res)=>{
    // Extract product ID from URL parameters
    let id=req.params.id

    // Find product by ID in database
    let productdata=await productmodel.findById(id)

    // If product not found
    if(productdata===null){
       return  res.status(404).json({message:"product data is not found"})
    }

    // Return product data
    res.status(200).json({message:"products data",payload:productdata})
})

// PUT endpoint to update a product by ID
productapp.put("/products/:id",async(req,res)=>{
    // Extract product ID from URL parameters
    let id=req.params.id

    // Get modified data from request body
    let modifieddata=req.body

    // Find and update product, return updated document
    let updateddata=await productmodel.findByIdAndUpdate(id,{$set:{...modifieddata}},{new:true,runValidators:true})

    // Return updated product data
    res.status(200).json({message:"product data is updated",payload:updateddata})
})

// DELETE endpoint to delete a product by ID
productapp.delete("/products/:id",async(req,res)=>{
    // Extract product ID from URL parameters
    let id=req.params.id

    // Find and delete product from database
    let deletedproduct=await productmodel.findByIdAndDelete(id)

    // If product not found
    if(deletedproduct===null){
      return   res.status(404).json({message:"product data is not found"})
    }

    // Return deletion success message
    res.status(201).json({message:"product is deleted"})
})
