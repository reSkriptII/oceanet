import "./style.css";

import ReactDOM from "react-dom/client";
import { FilterableProductCards } from "./homepage/products.tsx";

ReactDOM.createRoot(document.getElementById("filterable-product-cards")!).render(
  <FilterableProductCards />,
);
