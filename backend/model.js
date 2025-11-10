const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    email:{type:String,required:true,},
    password:{type:String,}
});
const Userfacebook=mongoose.model('Userfacebook',userSchema);
module.exports={Userfacebook};