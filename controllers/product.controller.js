import Product from "../models/Product.model.js";

export async function getProducts(req,res) {
    try{
        const products=await Product.find();
        if(!products) 
        return res.status(404).json({"message":"products not Found"});
        res.json({products});
        
    }
    catch(err){
        return res.status(500).json({"error while fetching products": err})
    }
}

export async function getproductbyid(req,res) {
     try{
        const id=req.params.id;
        const product=await Product.findById(id);
        if(!product) 
        return res.status(404).json({"message":"product not Found"});
        res.json({product});
    }
    catch(err){
        return res.status(500).json({"error while fetching product": err})
    }
}

