import express from "express"
import {
    addUser,
} from "../controller/user.controller.js"
const userRouter = express.Router();


userRouter.post("/send", addUser);



export default userRouter;