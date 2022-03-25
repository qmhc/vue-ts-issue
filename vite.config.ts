import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Test',
      formats: ['es'],
      fileName: 'test'
    },
    rollupOptions: {
      external: ['vue']
    }
  },
  plugins: [
    vue()
  ]
})
