import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  define: {
    'process.env': {
      REACT_SPINKIT_NO_STYLES: process.env.REACT_SPINKIT_NO_STYLES || false,
      URL_HOST_COINGECKO : process.env.URL_HOST_COINGECKO || 'https://api.coingecko.com/api/v3/coins/'
    },
  },

})
