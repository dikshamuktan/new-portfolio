import userModel from "../model/user.model.js";
import config from "../config/config.js";

export const getUser = async(req,res)=>{
    try{
        const findUser= await userModel.findOne({email:req.body.email});
        console.log(findUser)
        res.json(findUser)

    }catch(err){
        res.status(err?.statusCode || 500).json({ msg: err?.message });
    }
}

export const addUser= async(req,res)=>{
    try{
        const previousUser = await userModel.findOne({
            name: req.body.name,
          });
          if (previousUser) {
            const err = new Error("COMPANY ALREADY EXISTS");
            err.statusCode = 400;
            throw err;
          }

      const postCompany= await userModel.create(req.body);
      res.json(postCompany)
    }catch(err){
        res.status(err?.statusCode || 500).json({ msg: err?.message });
    }
};