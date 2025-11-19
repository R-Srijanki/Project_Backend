import Product from "../models/Product.model.js";
import mongoose from "mongoose";
//to get all product in database
export async function getProducts(req,res) {
    try{
        //read operation on collection
        const products=await Product.find();
       if (products.length === 0) //if no data available
        return res.status(404).json({"message":"products not Found"});
        return res.json({products});//returns all products in collection
    }
    catch(err){
        return res.status(500).json({"error while fetching products": err.message})
    }
}
//to get specific product
export async function getproductbyid(req,res) {
     try{
        const id=req.params.id;//get id from url
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: "Invalid productId" });
        const product=await Product.findById(id);//findById operation to get specific details of product if present in collection
        if(!product) //no product with id exists in collection
        return res.status(404).json({"message":"product not Found"});
        return res.json({product});//data of specific product
    }
    catch(err){
        return res.status(500).json({"error while fetching product": err.message})
    }
}

