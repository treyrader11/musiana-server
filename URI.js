const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
  ? "http://localhost:5173"
  : process.env.FRONTEND_URL;

module.exports = { clientURL };
