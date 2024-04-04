// import { useContext } from "react";
// import { UserContext } from "../context/context";

import styles from "./Card.module.css";
import EditProduct from "./EditProduct";

const Card = ({ data }) => {
  // const {products} = useContext(UserContext);


  const { image, title, desc, price } = data;

  return (
    <div className={styles.card}>
      <img src={image} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className={styles.actions}>
        <h6>{price} $</h6>
        <EditProduct />
      </div>
    </div>
  );
};

export default Card;
