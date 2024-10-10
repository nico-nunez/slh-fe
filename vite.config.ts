import { defineConfig } from 'vite';
import tsChecker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsChecker({ typescript: true })],
});
