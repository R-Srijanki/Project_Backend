import { addToCart, getCart, removeProduct, updateCart } from "../controllers/cart.controller.js"
import verifyToken from "../middleware/verify.js";

export default function cartRoutes(app){
    app.post("/api/cart",verifyToken,addToCart);
    app.put("/api/cart/:productId",verifyToken,updateCart);
    app.delete("/api/cart/:productId",verifyToken,removeProduct);
    app.get("/api/cart",verifyToken,getCart);
}