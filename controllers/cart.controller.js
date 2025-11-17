import CartModel from "../models/Cart.model.js";
import Product from "../models/Product.model.js"
async function getCartForUser(userid) {
    let cart=await CartModel.findOne({user:userid});
    if(!cart){
        cart=await CartModel.create({user:userid,items:[]});
    }
    return cart;
}
export async function addToCart(req,res) {
    try{
        const {productId,quantity=1}=req.body;
        if(!productId) return res.status(400).json({"message":"productId required"});
        const product=await Product.findById(productId);
        if(!product) return res.status(404).json({"message":"product not found"});
        if(product.stock<quantity) return res.status(400).json({"message":"insufficient stock"});
        const cart=await getCartForUser(req.user._id);
       const idx = cart.items.findIndex(i => i.product.toString() === productId);
        if(idx>-1) cart.items[idx].quantity+=quantity;
        else cart.items.push({product:productId,quantity});
        await cart.save();
        return res.status(200).json(cart);
    }
    catch(err){
        return res.status(500).json({"error occurred in adding product to cart":err.message});
    }
}

export async function updateCart(req,res) {
    try{
        const {productId}=req.params;
         const { quantity } = req.body;
         if(!quantity || quantity<1) return res.status(400).json({message:"invalid quantity"});
         if(!productId) return res.status(400).json({"message":"productId required"});
        const cart=await getCartForUser(req.user._id);
        const item = cart.items.find(i => i.product.toString() === productId);
        if(!item) return res.status(404).json({message:"Product not in cart"});
         const product=await Product.findById(productId);
        if(product && product.stock<quantity) return res.status(400).json({"message":"insufficient stock"});
        item.quantity=quantity;
        await cart.save();
        return res.json(cart);
    }
    catch(err){
         return res.status(500).json({"error occurred while updating product quantity to cart":err.message});
    }
}

export async function removeProduct(req,res) {
    try{
       const {productId}=req.params;
        if(!productId) return res.status(400).json({"message":"productId required"});
        const cart=await getCartForUser(req.user._id);
        const newItems=cart.items.filter(i=>i.product.toString()!==productId);
        cart.items=newItems;
        await cart.save();
        return res.json(cart);
    }
    catch(err){
         return res.status(500).json({"error occurred while removing product from cart":err.message});
    }
}

export async function getCart(req,res) {
    try{
        const cart=await getCartForUser(req.user._id);
        await cart.populate('items.product');
        res.json(cart);
    }
    catch(err){
         return res.status(500).json({"error occurred while fetching cart":err.message});
    }
}