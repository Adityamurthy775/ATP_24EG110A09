// Import Schema and model functions from Mongoose
import { Schema,model} from "mongoose";

// Define MongoDB schema for product collection
const productSchema=new Schema({
    // Product ID - required field
    productid:{
        type:Number,
        required:[true,"product id is requrid"]
    },

    // Product name - required field
    productname:{
        type:String,
        required:[true,"product name is requried"]
    },

    // Product price - required with validation range
    price:{
        type:String,
        required:[true,"the price is required"],
        min:[10000,"the minimum price is 10000"],
        max:[50000,"the maximum price is 50000"]
    },

    // Product brand - required field
    brand:{
        type:String,
        required:[true,"the brand is requried"]
    }
},{
    versionKey:false,  // Disable __v version field
    timestamps:true    // Add createdAt and updatedAt timestamps
})

// Create and export product model based on schema
export let productmodel=model("product",productSchema)
