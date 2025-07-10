import "./style.css";

import ReactDOM from "react-dom/client";
import { FilterableProductCards } from "./products.tsx";

ReactDOM.createRoot(document.getElementById("filterable-product-cards")!).render(
  <FilterableProductCards />,
);
