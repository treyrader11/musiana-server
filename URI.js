const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
  ? "http://localhost:5173"
  : "https://musiana.vercel.app";

module.exports = { clientURL };
