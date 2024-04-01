const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    profileImage:String,
    email:{
        type: String,
         require: true,
          unique:true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
    password: {type: String, require: true},
    name:{type:String, require: true},
    seniority:{type:Number, require: true},
    subject:{type:String, require: true}
})

module.exports=mongoose.model('User', userSchema);
