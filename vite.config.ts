import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true, // 👈 enables it, describe, expect without imports
		environment: "jsdom",
		setupFiles: "./src/test/setup.ts",
	},
});
