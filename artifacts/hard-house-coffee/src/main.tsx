import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root")!;

// Only hydrate in production where the static pre-render has replaced the
// SSR markers with real HTML.  In dev mode the source index.html contains
// a static fallback between those markers, which makes childElementCount > 0
// even though Vite has not run the SSR pipeline — causing a hydration
// mismatch.  Using import.meta.env.PROD ensures dev always uses createRoot.
if (import.meta.env.PROD && rootElement.childElementCount > 0) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
