import { useContext } from "react";
import { Link } from "react-router-dom";

import Loader from "../components/loader/Loader";
import { UserContext } from "../context/context";
import ProductDetailPage from "./ProductDetailPage";

import styles from "./ProductsList.module.css";

const ProductsList = () => {
  const { showCards, products } = useContext(UserContext);
  // console.log(products);
  return (
    // <div>
    //  {
    //   products.map(p=> <p key={p.id}>{p.title}</p>)
    //  }
    // </div>

    <>
      {!showCards ? (
        <div className={styles.card2}>
          {!products.length && <Loader />}
          {products.map((data) => (
            <div key={data.id} className={styles.card}>
              <div className={styles.img}>
                <img src={data.image} />{" "}
              </div>
              <div className={styles.dataBox}>
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
                <h6>
                  <span>price:</span> {data.price} $
                </h6>
              </div>
              <div className={styles.changes}>
                <button className={styles.detailButton}><Link to={`/productsList/${data.id}`}>Product Detail</Link></button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ProductsList;
