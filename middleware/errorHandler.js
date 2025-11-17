export default function errorHandler(err,req,res,next){
    console.log(err);
    const status=err.statusCode ||500;
    const message=err.message||"Server Error";
    res.status(status).json({message});
}