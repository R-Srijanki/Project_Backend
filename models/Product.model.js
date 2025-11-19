import mongoose from "mongoose";
//product schema
const productSchema=new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    discountPercentage: {type: Number,default: 0},
    rating:{type:Number,default:0},
    stock:{type:Number,default:0},
    brand:String,
    category:String,
    thumbnail:String,
    images:[String]},
    {timestamps:true}
);
//creates collection product in database
export default mongoose.model('Product',productSchema);

