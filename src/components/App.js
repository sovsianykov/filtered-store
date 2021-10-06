import React from "react";

import FilterableProductTable from "./FilterableProductTable/FilterableProductTable";
import Layout from "./Layout/Layout";
import { products } from "../content/products";

function App() {
  return (
        <Layout>
            <FilterableProductTable products={products}/>
        </Layout>
  );
}

export default App;
