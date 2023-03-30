import { defineConfig } from 'vite'
import commonjs from 'vite-plugin-commonjs'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), commonjs()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  }
})
