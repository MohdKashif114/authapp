const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true

    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        
        enum:["Admin","Student","Visitor"]
    }

});

module.exports=mongoose.model("user",UserSchema);