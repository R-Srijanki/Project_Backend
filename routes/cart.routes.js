import { addToCart, getCart, removeProduct, updateCart } from "../controllers/cart.controller.js"

export default function cartRoutes(app){
    app.post("/api/cart",addToCart);
    app.put("/api/cart",updateCart);
    app.delete("/api/cart",removeProduct);
    app.get("/api/cart",getCart);
}