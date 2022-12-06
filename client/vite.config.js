import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
const path = require("path")

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "components",
        replacement: path.resolve(__dirname, "src/components"),
      },
    ],
  },
  plugins: [react()],
})
