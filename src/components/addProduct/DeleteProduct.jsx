import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/context";
import api from "../../services/configs";
import styles from "./AddProduct.module.css";

const DeleteProduct = ({ id }) => {
  const { showCards, setShowCards, products, setProducts } =
    useContext(UserContext);

  const deleteProductHandler = async () => {
    setShowCards(!showCards);
    const result = await api.delete(`/products/${id}`);
    const result2 = await api.get("/products");
    setProducts(result2);
    setShowCards(showCards);
  };

  return (
    <button
      onClick={
        () => deleteProductHandler(id)
        // () => console.log(id)
      }
    >
      Delete Product
    </button>
  );
};

export default DeleteProduct;
