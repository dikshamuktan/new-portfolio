import mongoose from "mongoose";

const userSchema= mongoose.Schema(
    {
       name:{
        type:String,
        require:true
       },
       email:{
        type:String,
        require:true
       },
       number:{
        type:Number,
        require:true
       },
       company:{
        type:String,
        require:true,
        
       },
       services:{
        type:[String],
        require:true,
     
       },
       message:{
        type:String,
        require:true,
       }
    },
    {timestampes:true}
);

const userModel= mongoose.model("user",userSchema);
export default userModel;
