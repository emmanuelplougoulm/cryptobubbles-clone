import type { PluginOption } from "vite";

import react from "@vitejs/plugin-react";

const plugins = (mode: string): PluginOption[] => {
	return [react({ include: "pathToAllReactFiles.{jsx,tsx}" })];
};

export default plugins;
