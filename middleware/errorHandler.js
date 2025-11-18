export default function errorHandler(err,req,res,next){
    console.log(err);
    const status=err.statusCode ||500;//error status
    const message=err.message||"Server Error"; //error message
    return res.status(status).json({message});
}