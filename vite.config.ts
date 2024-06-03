// https://ajaynjain.medium.com/create-react-app-to-vite-the-ultimate-guide-5153be43a015

import { defineConfig, } from "vite";
import plugins from "./plugins";

export default defineConfig(({ mode }) => {

	return {
		plugins: plugins(mode),
		server: {
			port: 3000,
			open: true,
		},
	};
});