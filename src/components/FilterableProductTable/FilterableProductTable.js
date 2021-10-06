import React, { useState } from "react";
import style from "./FilterableProductTable.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import ProductTable from "../ProductTable/ProductTable";

const FilterableProductTable = (props) => {
  const [filteredText, setFilteredText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const { products } = props;

 const handleFilteredTextChange = (filteredText) =>{
     setFilteredText(filteredText)
 }
    const handleInStockOnlyChange = (inStockOnly) =>{
        setInStockOnly(inStockOnly)
    }

  return (
    <section className={style.container}>
      <SearchBar
       filteredText = {filteredText}
       inStockOnly = {inStockOnly}
       onFilteredTextChange = {handleFilteredTextChange}
       onInStockOnlyChange = {handleInStockOnlyChange}
      />
      <ProductTable
          products={products}
          filteredText = {filteredText}
          inStockOnly = {inStockOnly}
      />
    </section>
  );
};

export default FilterableProductTable;
