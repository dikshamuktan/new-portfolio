import mongoose from "mongoose";
import config from "./config.js";

const db = mongoose.connect(config.DB_URL);
export default db;