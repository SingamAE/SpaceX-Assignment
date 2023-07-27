declare global {
	interface Window {
		REACT_APP_API_URL: string | undefined;
	}
}
const getApiUrl = (): string => {
	if (window.REACT_APP_API_URL) {
		return window.REACT_APP_API_URL;
	}
	return process.env.REACT_APP_API_URL ?? "";
};
export {
	getApiUrl
};
