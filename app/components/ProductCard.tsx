import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";
//style is an obj- i need to find a properety

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
