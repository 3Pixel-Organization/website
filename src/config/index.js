const isProduction = process.env.NODE_ENV === "production";
export const BACKEND_URL = isProduction
  ? "https://team3pixel.herokuapp.com"
  : "http://localhost:3000";
