// import { useContext } from "react";
// import { UserContext } from "../context/context";

import EditProduct from "./addProduct/EditProduct";
import DeleteProduct from "./addProduct/DeleteProduct";
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
      <h6>
        <span>price:</span> {price} $
      </h6>
      <div className={styles.actions}>
        <DeleteProduct id={id} />
        <EditProduct id={id} />
      </div>
    </div>
  );
};

export default Card;
