import { addToCart, getCart, removeProduct, updateCart } from "../controllers/cart.controller.js"
import verifyToken from "../middleware/verify.js";

export default function cartRoutes(app){
    app.post("/api/cart",verifyToken,addToCart);
    app.put("/api/cart",verifyToken,updateCart);
    app.delete("/api/cart",verifyToken,removeProduct);
    app.get("/api/cart",verifyToken,getCart);
}