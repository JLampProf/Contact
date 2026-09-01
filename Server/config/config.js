import dotenv from "dotenv";

dotenv.config();

export const { PORT, DB_NAME, DB_PASS, DB_USER, DB_HOST } = process.env;

const whitelist = ["http://localhost:5173"];

export const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
