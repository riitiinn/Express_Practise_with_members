const httpStatus = require("http-status");
const membersServices = require("../../../services/v1/members");

module.exports=async(req,res,next)=>{
    try{
        const message = await membersServices.del(req.params.id);
        res.status(httpStatus.OK).json({
            message:"Deleted sucessfully",
            datae:message
        })

    }catch(err){
        next(err)

    }
}