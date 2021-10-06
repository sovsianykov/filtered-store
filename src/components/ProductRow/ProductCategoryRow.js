import React, {memo} from "react";
import styles from "./ProductRow.module.scss";
import ProductRow from "./ProductRow";

const ProductCategoryRow = ({
  productC,
  products,
  inStockOnly,
  filteredText,
}) => {
  return (
    <>
      <tr>
        <th colSpan="2" className={styles.productCategory}>
          {productC.category}
        </th>
      </tr>
      {products.map((product, i) => {
        if (inStockOnly && !product.stocked) {
          return;
        }
        if (product.name.indexOf(filteredText) === -1) {
          return;
        }
        if (product.category === productC.category) {
          return <ProductRow product={product} key={i} />;
        }
      })}
    </>
  );
};

export default memo(ProductCategoryRow);
