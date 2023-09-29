const member = require ("../../../../models/v1/public/member");

module.exports= async(memberObj)=>{
    const getone = await member.findById(memberObj);
    return getone;

}