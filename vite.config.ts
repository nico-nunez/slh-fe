import { defineConfig } from 'vite';
import tsChecker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsChecker({ typescript: true }), TanStackRouterVite()],
    server: {
        port: 3000,
    },
});
