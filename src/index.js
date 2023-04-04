import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Kennels } from './Kennels';
import './index.css';

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Kennels />
  </BrowserRouter>
);

