import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export default function verifyToken(req,res,next){
    try{
        if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]=='JWT'){
            jwt.verify( req.headers.authorization.split(' ')[1], 'SECRETKEY',
                async function(err,verifyToken){
                if(err){
                    return res.status(403).json({message: "Invalid JWT token"})
                }
                const data = await User.findById(verifyToken.id)
                req.user = data;     
                next();           
            });
     }
     else  return res.status(403).json({message:"token not found"})
    }
    catch(err){
        return res.status(500).json({message:"error during verifying token"})
    }
}