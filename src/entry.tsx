import React from "react";
import { createRoot } from "react-dom/client";
import { App } from './App';

// 非nullアサーションで下記のは解決
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
