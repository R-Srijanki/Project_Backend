import mongoose from "mongoose";
//mongoose schema for cart 
const cartSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId, //gives us id of ref mentioned
        ref:'User',
        required:true,
        unique:true,
        index:true
    },
    items:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Product',
                required:true},
            quantity:{
                type:Number,
                required:true,
                default:1
            }
        }
    ]
}, {timestamps:true});
//creates collection carts in database
export default mongoose.model('Cart',cartSchema);