import React, { useState } from "react";
import styles from "./ProductTable.module.scss";
import ProductRow from "../ProductRow/ProductRow";
import ProductCategoryRow from "../ProductRow/ProductCategoryRow";

const ProductTable = ({ products, filteredText, inStockOnly }) => {
  let lastCategory = null;
  let categorized = [];
  products.forEach((product) => {
    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      categorized.push(product);
    }

    lastCategory = product.category;
  });
  return (
    <table className={styles.productTable}>
      <thead>
        <tr>
          <th className={styles.thRowsLeft}>Name</th>
          <th className={styles.thRowsRight}>Price</th>
        </tr>
      </thead>

      <tbody>
        {categorized.map((product, i) => {
          return (
            <ProductCategoryRow
              productC={product}
              products={products}
              inStockOnly={inStockOnly}
              filteredText = {filteredText}
              key={i}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
