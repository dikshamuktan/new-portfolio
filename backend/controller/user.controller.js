import userModel from "../model/user.model.js";

export const addUser= async (req, res) => {
 
  try{
    console.log(req.body)
   const privioususer= await userModel.findOne({email:req.body.email});
   if(privioususer){
   const err= new Error("user email already exist")
   err.statusCode = 400
   throw err

   }
   const saveUser= await userModel.create({
      ...req.body,

   });

   res.json(saveUser);

  }catch(err){
      res.status(err?.statusCode || 500).json({msg:err?.message|| "something went wrong"})
  };
};
