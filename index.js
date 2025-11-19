import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";

const app= express();//creates server
//cloud link on mongo atlas
mongoose.connect("mongodb+srv://jankirathod999_db_user:H6i46vyt5LaafdJZ@cluster0.pdt2k5e.mongodb.net/");
//database connection 
const db=mongoose.connection;
//if connected to database  
db.on("open",()=>{
    console.log("connection successful");
})
//if not connected to database
db.on("error",()=>{
    console.log("connection not successful");
})
// middlewares that handles both json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//to enable to work on different domain
app.use(cors());
//routes of user, product,cart
userRoutes(app);
productRoutes(app);
cartRoutes(app);
//global errorhandler
app.use(errorHandler);
//server runs on port 8000
app.listen(8000,()=>{
    console.log("Server listening on port 8000");
})
