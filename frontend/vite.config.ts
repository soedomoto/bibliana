import { ProxyOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import http from 'node:http'

// if in ESM context
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  server: {
    proxy: {
      '/': {
        bypass: (req, res) => {
          if (req.url.startsWith('/api')) {
            let redr = new URL(req.url, req.headers.referer).href
            redr = redr.replace('wails://wails.', 'http://')

            console.log(redr)
            return redr
          } else {
            return req.url
          }
        }
      }
      // '/about': {
      //   bypass: function (req: http.IncomingMessage, res: http.ServerResponse, options: ProxyOptions) {
      //     res.statusCode = 404;
      //     res.end();
      //   },

      // },
      // '/api/': {
      //   bypass: function (req: http.IncomingMessage, res: http.ServerResponse, options: ProxyOptions) {
      //     res.statusCode = 404;
      //     res.end();
      //   },
      // },
    },
  },
})
