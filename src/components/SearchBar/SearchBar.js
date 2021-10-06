import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({
                       filteredText,
                       inStockOnly ,
                       onFilteredTextChange,
                       onInStockOnlyChange

}) => {




  return (
    <form className={styles.searchBar}>
      <input
          type="text"
          placeholder="Search..."
          value={filteredText}
          onChange={event => onFilteredTextChange(event.target.value) }
      />
      <p>
        <input
            type="checkbox"
            value={inStockOnly}
            onChange={event => onInStockOnlyChange(event.target.checked) }
        />{" "}
        <span className={styles.spanGreen}>Only show products in stock</span>
      </p>
    </form>
  );
};

export default SearchBar;
