const Member = require("../../../../models/v1/public/member")

module.exports = async(id)=>{
    const deleteMember = await Member.deleteOne({
        _id:id
    })
    return deleteMember;
}
