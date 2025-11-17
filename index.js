import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";
const app=new express();
mongoose.connect("mongodb+srv://jankirathod999_db_user:H6i46vyt5LaafdJZ@cluster0.pdt2k5e.mongodb.net/");
const db=mongoose.connection;
db.on("open",()=>{
    console.log("connection successful");
})

db.on("error",()=>{
    console.log("connection not successful");
})
// middlewares that handles both json and urlencoded data
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(errorHandler);
userRoutes(app);
productRoutes(app);
cartRoutes(app);
app.listen(8000,()=>{
    console.log("Server listening on port 8000");
})
//jankirathod999_db_user
//H6i46vyt5LaafdJZ