import { addToCart, getCart, removeProduct, updateCart } from "../controllers/cart.controller.js"
import verifyToken from "../middleware/verify.js";

export default function cartRoutes(app){
    //route to add existing product in database to cart for user whose token matches given when login 
    app.post("/api/cart",verifyToken,addToCart);
    //updates quantity of product in cart for user with token access
    app.put("/api/cart/:productId",verifyToken,updateCart);
    //remove product from cart for user with token access
    app.delete("/api/cart/:productId",verifyToken,removeProduct);
    //to get all products in cart for user with token access
    app.get("/api/cart",verifyToken,getCart);
}