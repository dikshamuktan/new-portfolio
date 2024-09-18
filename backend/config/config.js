import dotenv from "dotenv";
dotenv.config();

const data={
    // ALLOWED_SITES: process.env.ALLOWED_WEBSITES,
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL_CLOUD,
    // JWT_SECRET:process.env.JWT_SECRET,
    // JWT_ISSUER:process.env.JWT_ISSUER,
    // JWT_EXPIRY_DATE:process.env.JWT_EXPIRY_DATE,
  
}

export default data;