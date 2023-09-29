 const membersServices = require ("../../../services/v1/members");
 const httpStatus = require("http-status");

 module.exports = async(req,res,next)=>{
    try{
        const message = await membersServices.create(req.body);
        console.log("Member created", message);

        res.status(httpStatus.OK).json({
            message:"sucess",
            data:message,
        });
    }catch(err){
        next(err);
    }
 };
