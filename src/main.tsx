import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "./index.css";
import { Footer } from "./components/Footer.tsx";
import { ScrollToTop } from "./components/ScrollToTop.tsx";
import { FAQ } from "./components/FAQ.tsx";
import { Newsletter } from "./components/Newsletter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  </React.StrictMode>
);
