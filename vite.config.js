import { fileURLToPath } from "node:url";
import { defineConfig, transformWithEsbuild } from "vite";

const entryPath = fileURLToPath(new URL("./index.js", import.meta.url));

export default defineConfig({
  plugins: [
    {
      name: "jsx-entry",
      enforce: "pre",
      transform(code, id) {
        if (id.replaceAll("\\", "/") === entryPath.replaceAll("\\", "/")) {
          return transformWithEsbuild(code, id, { loader: "jsx" });
        }
      },
    },
  ],
  optimizeDeps: {
    esbuildOptions: { loader: { ".js": "jsx" } },
  },
});
