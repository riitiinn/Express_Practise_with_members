const member = require("../../../../models/v1/public/member");

module.exports = async ()=>{
    const list=await member.find();
        return list;
}