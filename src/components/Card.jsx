// import { useContext } from "react";
// import { UserContext } from "../context/context";

import EditProduct from "./addProduct/EditProduct";
import styles from "./Card.module.css";

const Card = ({ data }) => {
  // const {products} = useContext(UserContext);

  const { image, title, desc, price, id } = data;
  // console.log(data);

  return (
    <div className={styles.card}>
      <img src={image} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className={styles.actions}>
        <h6>{price} $</h6>
        <EditProduct id={id} />
      </div>
    </div>
  );
};

export default Card;
