import dotenv from "dotenv";
dotenv.config();

const data={
    ALLOWED_SITES: process.env.ALLOWED_WEBSITES,
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
  
}

export default data;