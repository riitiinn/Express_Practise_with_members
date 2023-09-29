const Member = require("../../../../models/v1/public/member");

module.exports= async(req)=>{ 
            await Member.updateOne(
            {_id:req.params.id},
            {$set:{
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Email:req.body.Email
            }}

        );
    const updatedMember = await Member.findById(req.params.id);
    return updatedMember;
        
}