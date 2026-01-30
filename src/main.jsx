/**
 * ============================================================================
 * MAIN.JSX - React Application Entry Point
 * ============================================================================
 * 
 * This is where React is initialized and mounted to the DOM.
 * 
 * KEY CONCEPTS:
 * 
 * 1. createRoot (React 19)
 *    - New API for mounting React apps (replaced ReactDOM.render)
 *    - Enables concurrent features
 *    - Targets the #root div in index.html
 * 
 * 2. StrictMode
 *    - Development-only wrapper that:
 *      • Warns about deprecated APIs
 *      • Detects unsafe lifecycle methods
 *      • Highlights potential problems
 *    - Does NOT affect production builds
 * 
 * 3. CSS Import
 *    - Imports index.css which includes:
 *      • Tailwind directives (@tailwind base/components/utilities)
 *      • Custom animations (float, marquee, spin)
 *      • Global styles
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // Global styles + Tailwind
import App from './App.jsx'  // Main application component

/**
 * MOUNT REACT APPLICATION
 * 
 * Gets the #root element from index.html and renders
 * the App component inside it.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

