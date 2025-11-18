import { getproductbyid, getProducts } from "../controllers/product.controller.js";

export default function productRoutes(app){
    //to access products in database
    app.get("/api/products",getProducts);
    //to get specific product from database
    app.get("/api/product/:id",getproductbyid);
}