import { Schema,model} from "mongoose";
const productSchema=new Schema({
    productid:{
        type:Number,
        required:[true,"product id is requrid"]
    },
    productname:{
        type:String,
        required:[true,"product name is requried"]
    },
    price:{
        type:String,
        required:[true,"the price is required"],
        min:[10000,"the minimum price is 10000"],
        max:[50000,"the maximum price is 50000"]
    },
    brand:{
        type:String,
        required:[true,"the brand is requried"]
    }
},{
    versionKey:false,
    timestamps:true
})
export let productmodel=model("product",productSchema)