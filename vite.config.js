import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  plugins: [
      react(),
    // Other plugins...
    {
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          console.log(req.url);
          if (req.url === '/main.js') {
            res.setHeader('Content-Type', 'text/javascript');
          }
          next();
        });
      },
    },
  ],
})
