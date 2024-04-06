import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./ProductDetailPage.module.css";

import api from "../services/configs";

const ProductDetailPage = () => {
  const [data, setData] = useState();

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`/products/${params.id}`);
      setData(result);
    };
    fetchData();

    return;
  }, []);

  return (
    <>
      <div>
        {data && (
          <div className={styles.card}>
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
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetailPage;
