const httpStatus = require("http-status");
const membersServices = require("../../../services/v1/members");

module.exports = async(req,res,next)=>{
    try{
        const message = await membersServices.update(req);
        res.status(httpStatus.OK).json({
            message:"Updated Sucessfully",
            data:message
        });
    }catch(err){
        next(err);
    }
}
