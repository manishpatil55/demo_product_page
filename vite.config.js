/**
 * ============================================================================
 * VITE.CONFIG.JS - Vite Build Tool Configuration
 * ============================================================================
 * 
 * Vite is the build tool and dev server for this project.
 * 
 * KEY FEATURES:
 * - Lightning-fast Hot Module Replacement (HMR)
 * - ES modules for instant server start
 * - Optimized production builds
 * 
 * PLUGINS:
 * - @vitejs/plugin-react: Enables React Fast Refresh
 * 
 * DEV SERVER:
 * Default port: 5173
 * Run with: npm run dev
 * 
 * PRODUCTION BUILD:
 * Output: /dist folder
 * Run with: npm run build
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration
// Docs: https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),  // Enables React with Fast Refresh
  ],
})

