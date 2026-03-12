
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  declare global {
    interface Window {
      gtag?: (...args: unknown[]) => void;
    }
  }

  createRoot(document.getElementById("root")!).render(<App />);
  