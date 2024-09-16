import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    name:{
     type:String,
     require:true,
    },
 
    email:{
    type:String,
     require:true,
    },
    
    message:{
        type:String,
        require:true,
    }
})

const userModel= mongoose.model("Company", userSchema);
export default userModel; 