import express from "express"
import {
    getUser,
    addUser,
} from "../controller/user.controller.js"
const router = express.Router();

router.get("/", getUser);
router.post("/", addUser);
// router.patch("/:id", getUser);
// router.post("/new", addUser);


export default router;