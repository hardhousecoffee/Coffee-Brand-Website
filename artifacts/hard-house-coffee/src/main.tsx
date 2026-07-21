import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root")!;

// If the root already contains server-rendered HTML, hydrate it so React
// attaches to the existing DOM without wiping and re-rendering it.
// Falls back to createRoot in dev or any page without pre-rendered content.
if (rootElement.childElementCount > 0) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
