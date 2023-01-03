import dotenv from "dotenv";
dotenv.config()

export const config= {
    PORT: process.env.PORT ?? 3000,
    MONGO:{
        DB_USERNAME:process.env.DB_USER,
        DB_PASSWORD:process.env.DB_PASSWORD,
        DB_NAME:process.env.DB_NAME
    }
}