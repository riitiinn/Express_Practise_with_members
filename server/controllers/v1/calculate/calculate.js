const calculateServices = require("../../../services/v1/calculate");
const httpStatus = require("http-status");
module.exports = async (_req,res,_next)=>{
    try{
        const message = await calculateServices.calculate(req.body);
        res.status(httpStatus).json({
            ans:message
        })
    }catch(err){
        console.log(err);
    
    }
}