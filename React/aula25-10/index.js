import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Toggle from "./Toggle";
import ColorPicker from "./ColorPicker";
import ColorPickerWithArray from "./ColorPickerWithArray";
import PersonalPizza from "./PersonalPizza";
import Login from "./Login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<StrictMode></StrictMode>);