let BACKEND_URL;

if (process.env.REACT_APP_URL) {
	BACKEND_URL = process.env.REACT_APP_BACKEND_URL
} else {
	BACKEND_URL = "http://localhost:3000";
}

export { BACKEND_URL };