import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchWeather from "./Weather";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SearchWeather />
  </StrictMode>
);
