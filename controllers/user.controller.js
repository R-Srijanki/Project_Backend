import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function register(req,res) {
    try{
        const {name,email,password}=req.body;
        if(!name || !email ||!password)
            return res.status(400).json({"message":"Missing fields"});
        const exists=await User.findOne({email});
        if(exists)
            return res.status(400).json({message:"Email already in use"});
        const newUser=await User.create({name,email,
            password:bcrypt.hashSync(password,12),
        });
        res.status(201).json({newUser});
    }
    catch(err){
        return res.status(500).json({"error occured during registering user":err});
    }
    
}

export async function login(req,res) {
    try{
        const {email,password}=req.body;
        if(!email ||!password)
            return res.status(400).json({"message":"Missing fields"});
        const exists=await User.findOne({email});
        if(!exists)
            return res.status(401).json({message:"User does not exist"});
        let validPassword=bcrypt.compareSync(password,exists.password);
        if(!validPassword){
            return res.status(401).json({"message":"Invalid user details"});
        }
        let token=jwt.sign({id:exists.id},"SECRETKEY");
        return res.status(200).json({
            user:{
                name:data.name,
                email:data.email
            },
            accessToken:token,
        });
    }
    catch(err){
        return res.status(500).json({"error occured during login":err});
    }
}