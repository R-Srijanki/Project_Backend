import { login, register } from "../controllers/user.controller.js"

export default function userRoutes(app){
    //to register new user route
    app.post("/api/register",register);
    //to login for existing user route
    app.post("/api/login",login);
}