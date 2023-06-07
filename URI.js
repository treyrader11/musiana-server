const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
	? "http://localhost:5173"
	: ["https://adra-amie.netlify.app", "https://fb-clone-frontend.vercel.app"];

module.exports = { clientURL };