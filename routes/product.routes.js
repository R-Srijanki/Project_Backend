import { getproductbyid, getProducts } from "../controllers/product.controller.js";

export default function productRoutes(app){
    app.get("/api/products",getProducts);
    app.get("/api/product/:id",getproductbyid);
}