// https://ajaynjain.medium.com/create-react-app-to-vite-the-ultimate-guide-5153be43a015

import { defineConfig, loadEnv } from "vite";
import plugins from "./plugins";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), ["VITE_"]);

	return {
		plugins: plugins(mode),
		server: {
			port: 3000, // To run the app on port 3000
			open: true, // If we want to open the app once its started
		},
	};
});




